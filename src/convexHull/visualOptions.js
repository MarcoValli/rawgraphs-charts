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
    default: 50,
    group: 'artboard',
  },

  showLegend: {
    type: 'boolean',
    label: 'Show legend',
    default: false,
    group: 'artboard',
    requiredDimensions: ['x', 'y', 'group'],
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
    requiredDimensions: ['x', 'y'],
  },

  yOrigin: {
    type: 'boolean',
    label: 'Set y origin to 0',
    default: false,
    group: 'chart',
    requiredDimensions: ['x', 'y'],
  },

  groupStrokeWidth: {
    type: 'number',
    label: 'Groups stroke width',
    default: 10,
    step: 1,
    min: 1,
    group: 'chart',
    requiredDimensions: ['x', 'y'],
  },

  groupOpacity: {
    type: 'number',
    label: 'Groups opacity',
    default: 0.5,
    step: 0.1,
    min: 0,
    max: 1,
    group: 'chart',
    requiredDimensions: ['x', 'y'],
  },

  showPoints: {
    type: 'boolean',
    label: 'Show dots',
    default: true,
    group: 'chart',
    requiredDimensions: ['x', 'y'],
  },

  pointsRadius: {
    type: 'number',
    label: 'Dots radius',
    default: 2,
    group: 'chart',
    disabled: {
      showPoints: false,
    },
    requiredDimensions: ['x', 'y'],
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'group',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
    requiredDimensions: ['x', 'y'],
  },

  labelStyles: {
    type: 'text',
    label: 'Label',
    group: 'labels',
    options: [
      { label: 'Primary', value: 'labelPrimary' },
      { label: 'Secondary', value: 'labelSecondary' },
      { label: 'Italic', value: 'labelItalic' },
    ],
    default: 'labelPrimary',
    repeatFor: 'label',
    repeatDefault: ['labelPrimary', 'labelSecondary', 'labelItalic'],
    requiredDimensions: ['x', 'y', 'label'],
  },

  showLabelsOutline: {
    type: 'boolean',
    label: 'Show outline',
    default: false,
    group: 'labels',
    requiredDimensions: ['x', 'y', 'label'],
  },

  autoHideLabels: {
    type: 'boolean',
    label: 'Auto hide labels',
    default: false,
    group: 'labels',
    requiredDimensions: ['x', 'y', 'label'],
  },
}
