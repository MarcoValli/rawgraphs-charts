export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 10,
    group: 'artboard',
  },

  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 10,
    group: 'artboard',
  },

  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 30,
    group: 'artboard',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 50,
    group: 'artboard',
  },

  barsWidth: {
    type: 'number',
    label: 'Box plots width',
    default: 20,
    group: 'chart',
  },

  iqrMultiplier: {
    type: 'number',
    label: 'interquartile range multiplier',
    default: 1.5,
    group: 'chart',
  },

  dotsRadius: {
    type: 'number',
    label: 'dots radius',
    default: 4,
    group: 'chart',
  },

  yOrigin: {
    type: 'boolean',
    label: 'Set y origin to 0',
    default: false,
    group: 'chart',
  },

  showLegend: {
    type: 'boolean',
    label: 'Show legend',
    default: false,
    group: 'artboard',
  },

  legendWidth: {
    type: 'number',
    label: 'Legend width',
    default: 200,
    group: 'artboard',
    disabled: {
      showLegend: false,
    },
    container: 'width',
    containerCondition: {
      showLegend: true,
    },
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'schemeCategory10',
    },
    group: 'colors',
  },

  showValues: {
    type: 'boolean',
    label: 'Show boxpot values',
    default: true,
    group: 'labels',
  },
}
