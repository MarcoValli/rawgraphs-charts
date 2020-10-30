import * as d3 from 'd3'
import { rawgraphsLegend } from '@raw-temp/rawgraphs-core'
import * as d3Gridding from 'd3-gridding'

export function render(svgNode, data, visualOptions, mapping, originalData) {
  console.log('- render')

  const {
    // artboard options
    width,
    height,
    background,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    // chart options
    padding,
    sortBarsBy,
    // series options
    columnsNumber,
    useSameScale,
    sortSeriesBy,
    gutter,
    showSeriesLabels,
    repeatAxesLabels,
    // color options
    colorScale,
    // legend
    showLegend,
    legendWidth,
  } = visualOptions

  const margin = {
    top: marginTop,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft,
  }

  // prepare sorting function
  const barSorting = {
    'Value (descending)': function (a, b) {
      console.log('sorting descending')
      return d3.descending(a.size, b.size)
    },
    'Value (ascending)': function (a, b) {
      return d3.ascending(a.size, b.size)
    },
    Name: function (a, b) {
      return d3.ascending(a.bars, b.bars)
    },
    Original: function (a, b) {
      return 0
    },
  }

  // create nest structure
  const nestedData = d3
    .rollups(
      data,
      (v) => v.sort(barSorting['Value (descending)']),
      (d) => d.series
    )
    .map((d) => ({ data: d }))

  // comupte max values for series
  // will add it as property to each series.
  nestedData.forEach(function (serie) {
    serie.totalValue = serie.data[1].reduce(
      (result, item) => result + item.size,
      0
    )
  })

  // sort the dataset according to sortSeriesBy option
  if (sortSeriesBy == 'Total value (descending)') {
    nestedData.sort((a, b) => d3.descending(a.totalValue, b.totalValue))
  } else if (sortSeriesBy == 'Total value (ascending)') {
    nestedData.sort((a, b) => d3.ascending(a.totalValue, b.totalValue))
  } else if (sortSeriesBy == 'Name') {
    nestedData.sort((a, b) => d3.ascending(a[0], b[0]))
  }

  // set up grid
  const gridding = d3Gridding
    .gridding()
    .size([width, height])
    .mode('grid')
    .padding(0) // no padding, margins will be applied inside
    .cols(columnsNumber)

  const griddingData = gridding(nestedData)

  const svg = d3.select(svgNode).append('g').attr('id', 'viz')

  const series = svg
    .selectAll('g')
    .data(griddingData)
    .join('g')
    .attr('id', (d) => d[0])
    .attr(
      'transform',
      (d) => 'translate(' + (d.x + margin.left) + ',' + (d.y + margin.top) + ')'
    )

  // domains
  let originalDomain = d3.extent(data, (d) => d.size)
  let sizeDomain =
    originalDomain[0] > 0 ? [0, originalDomain[1]] : originalDomain
  const barsDomain = [...new Set(data.map((d) => d.bars))]

  series.each(function (d, serieIndex) {
    // make a local selection for each serie
    const selection = d3.select(this)

    // compute each serie width and height
    const serieWidth = d.width - margin.right - margin.left
    const serieHeight = d.height - margin.top - margin.bottom

    // scales
    const barScale = d3
      .scaleBand()
      .range([0, serieWidth])
      .domain(barsDomain)
      .padding(
        padding / (serieWidth / griddingData[0].data[1].length) //convert padding from px to percentage
      )

    const localDomain = d3.extent(d.data[1], (e) => e.size)

    const sizeScale = d3
      .scaleLinear()
      .domain(useSameScale ? sizeDomain : localDomain)
      .nice()
      .range([serieHeight, 0])

    const bars = selection
      .append('g')
      .attr('class', 'bars')
      .selectAll('rect')
      .data((d) => d.data[1])
      .join('rect')
      .attr('id', (d) => d.series + ' - ' + d.bars)
      .attr('x', (d) => barScale(d.bars))
      .attr('y', (d) => sizeScale(Math.max(0, d.size)))
      .attr('height', (d) => Math.abs(sizeScale(d.size) - sizeScale(0)))
      .attr('width', barScale.bandwidth())
      .attr('fill', (d) => colorScale(d.color))

    const xAxis = selection
      .append('g')
      .attr('id', 'xAxis')
      .attr('transform', 'translate(0,' + sizeScale(0) + ')')
      .call(d3.axisBottom(barScale).tickSizeOuter(0))

    const yAxis = selection
      .append('g')
      .attr('id', 'yAxis')
      .call(d3.axisLeft(sizeScale).tickSizeOuter(0))

    const titles = selection
      .append('text')
      .attr('class', 'title')
      .text((d) => d.data[0])
      .attr('y', -4)
      .attr('font-family', 'sans-serif')
      .attr('font-size', 12)
      .attr('font-weight', 'bold')

    // add the x axis titles
    selection
      .append('text')
      .attr('dy', serieHeight - 4)
      .attr('x', serieWidth)
      .attr('class', 'axisTitle')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 12)
      .attr('font-style', 'italic')
      .attr('text-anchor', 'end')
      .attr('display', serieIndex == 0 || repeatAxesLabels ? null : 'none')
      .text(mapping.bars.value)

    // add the y axis titles
    selection
      .append('text')
      .attr('y', 0)
      .attr('x', 4)
      .attr('dominant-baseline', 'hanging')
      .attr('class', 'axisTitle')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 12)
      .attr('font-style', 'italic')
      .attr('text-anchor', 'start')
      .attr('display', serieIndex == 0 || repeatAxesLabels ? null : 'none')
      .text(mapping.size.value + ' (' + mapping.size.config.aggregation + ')')
  })

  // add legend
  if (showLegend) {
    const legendLayer = d3
      .select(svgNode)
      .append('g')
      .attr('id', 'legend')
      .attr('transform', `translate(${width},${marginTop})`)

    const legend = rawgraphsLegend().legendWidth(legendWidth)

    if (mapping.color.value) {
      legend.addColor(mapping.color.value, colorScale)
    }

    legendLayer.call(legend)
  }
}
