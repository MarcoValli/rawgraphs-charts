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
    default: 10,
    group: 'artboard',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 10,
    group: 'artboard',
  },

  minDiameter: {
    type: 'number',
    label: 'Minimum diameter',
    default: 2,
    group: 'chart',
  },

  maxDiameter: {
    type: 'number',
    label: 'Maxiumum diameter',
    default: 30,
    group: 'chart',
  },

  linkOpacity: {
    type: 'number',
    label: 'Links opacity',
    default: 0.5,
    group: 'chart',
  },

  sameSide: {
    type: 'boolean',
    label: 'Arcs only on the top',
    default: false,
    group: 'chart',
  },

  nodeSize: {
    type: 'text',
    label: 'Nodes size',
    group: 'chart',
    options: [
      { label: 'Same size', value: 'default' },
      { label: 'Weighted degree', value: 'totalValue' },
      { label: 'Weighted inDegree', value: 'inValue' },
      { label: 'Weighted outDegree', value: 'outValue' },
      { label: 'Links count', value: 'degree' },
      { label: 'OutDegree', value: 'outDegree' },
      { label: 'InDegree', value: 'inDegree' },
    ],
    default: 'totalValue',
  },

  orderNodesBy: {
    type: 'text',
    label: 'Sort nodes by',
    group: 'chart',
    options: [
      'Name',
      'Links count (degree)',
      'Total value',
      'Minimize overlaps',
    ],
    default: 'Minimize overlaps',
  },
}
