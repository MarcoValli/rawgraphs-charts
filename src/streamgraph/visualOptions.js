export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 20,
    group: 'margins',
  },

  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 10,
    group: 'margins',
  },

  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 20,
    group: 'margins',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 40,
    group: 'margins',
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

  streamsPadding: {
    type: 'number',
    label: 'Padding between streams (px)',
    default: 1,
    group: 'chart',
  },

  streamsOrder: {
    type: 'text',
    label: 'Sort streams by',
    group: 'chart',
    options: [
      'Earliest',
      'Ascending',
      'Descending',
      'Inside out',
      'None',
      'Reverse',
    ],
    default: 'None',
  },

  streamsOffset: {
    type: 'text',
    label: 'Sort streams by',
    group: 'chart',
    options: ['Expand', 'Diverging', 'Silhouette', 'Wiggle', 'None'],
    default: 'Silhouette',
  },

  useSameScale: {
    type: 'boolean',
    label: 'Use same scale',
    default: true,
    group: 'series',
  },

  columnsNumber: {
    type: 'number',
    label: 'Number of columns',
    default: 0,
    group: 'series',
  },

  sortSeriesBy: {
    type: 'text',
    label: 'Sort series by',
    group: 'series',
    options: [
      'Total value (descending)',
      'Total value (ascending)',
      'Name',
      'Original',
    ],
    default: 'Total value (descending)',
  },

  showSeriesLabels: {
    type: 'boolean',
    label: 'Show series titles',
    default: true,
    group: 'series',
  },

  showGrid: {
    type: 'boolean',
    label: 'Show series grid',
    default: true,
    group: 'series',
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'streams',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  },
}
