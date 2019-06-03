import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  bodyFontFamily: ['Helvetica Neue', 'Niramit', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  headerFontFamily: ['Avenir Next', 'Kanit', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
