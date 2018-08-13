import Typography from "typography";
import bootstrapTheme from "typography-theme-bootstrap";

const customTheme = {
    ...bootstrapTheme,
    baseFontSize: '15px',
    scaleRatio: 3,
    bodyWeight: '300'
}

customTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'h1, h2, h3, h4': {
        textTransform: 'uppercase',
    },
    'h1, h2': {
        fontWeight: '800'
    }
  })

const typography = new Typography(customTheme);

typography.baseFontSize = '88px';

export default typography;