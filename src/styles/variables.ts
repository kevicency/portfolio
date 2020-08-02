/* eslint-disable max-len */
const baseColors = {
  text: 'white',

  purple: '#541388',
  purpleDark: '#2E2157',
  purpleDarker: '#0d0221',

  magenta: '#f6019d',
  teal: '#01ffc3',
  azure: '#2de2e6',
  yellow: '#F9C80E',
  orange: '#FF6C11',

  white: '#fff',
  black: '#000'
}

export const colors = {
  ...baseColors,

  bg: baseColors.purpleDarker,
  bgAlt: baseColors.purpleDark,

  ui: {
    bright: '#e0d6eb',
    light: '#f5f3f7',
    whisper: '#fbfafc'
  },
  gray: {
    dark: 'hsla(270, 17.119554496%, 0%, 0.92)',
    copy: 'hsla(270, 15.797828016000002%, 0%, 0.88)',
    calm: 'rgba(0, 0, 0, 0.54)'
  }
}

export const fonts = {
  body: 'Cabin, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
  roadRage: '"Road Rage"',
  streamster: 'Streamster',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const widths = {
  md: 720,
  lg: 960,
  xl: 1280
}

export const dimensions = {
  fontSize: {
    regular: 16,
    large: 18
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25
  },
  lineHeight: {
    regular: 1.45,
    heading: 1.2
  },
  containerPadding: 1.5
}

export const heights = {
  header: 64
}
