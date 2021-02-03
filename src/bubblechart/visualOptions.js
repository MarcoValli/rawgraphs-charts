export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 50,
    group: 'artboard',
  },

  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 50,
    group: 'artboard',
  },

  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 50,
    group: 'artboard',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 100,
    group: 'artboard',
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

  xOrigin: {
    type: 'boolean',
    label: 'Set x origin to 0',
    default: false,
    group: 'chart',
  },

  yOrigin: {
    type: 'boolean',
    label: 'Set y origin to 0',
    default: false,
    group: 'chart',
  },

  maxRadius: {
    type: 'number',
    label: 'Max radius (px)',
    default: 15,
    step: 1,
    group: 'chart',
  },

  showStroke: {
    type: 'boolean',
    label: 'Show bubbles stroke',
    default: false,
    group: 'chart',
  },

  showPoints: {
    type: 'boolean',
    label: 'Show points',
    default: false,
    group: 'chart',
  },

  pointsRadius: {
    type: 'number',
    label: 'Points radius (px)',
    default: 1,
    group: 'chart',
    disabled: {
      showPoints: false,
    },
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
      defaultColor: '#aa0000',
    },
    group: 'colors',
  },

  showLabelsOutline: {
    type: 'boolean',
    label: 'Show outline',
    default: false,
    group: 'labels',
  },

  autoHideLabels: {
    type: 'boolean',
    label: 'Auto hide labels',
    default: false,
    group: 'labels',
  },
}
