import color from 'color';
import { black, white, pinkA400 } from './colors';
import { DefaultTheme as theme } from 'react-native-paper';
import { fonts } from './fonts';

const DefaultTheme = {
  ...theme,
  dark: false,
  roundness: 4,
  fonts: fonts,
  colors: {
    primary: '#5c6bc0',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: white,
    error: '#B00020',
    text: black,
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: color(black).alpha(0.26).rgb().string(),
    placeholder: color(black).alpha(0.54).rgb().string(),
    backdrop: color(black).alpha(0.5).rgb().string(),
    notification: pinkA400,
  },
  // fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
};

export default DefaultTheme;