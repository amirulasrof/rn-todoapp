import color from 'color';
import DefaultTheme from './DefaultTheme';
import { black, white, pinkA100 } from './colors';
import { fonts } from './fonts';

const DarkTheme = {
  ...DefaultTheme,
  dark: true,
  mode: 'adaptive',
  fonts: fonts,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5c6bc0',
    accent: '#03dac6',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    text: white,
    disabled: color(white).alpha(0.38).rgb().string(),
    placeholder: color(white).alpha(0.54).rgb().string(),
    backdrop: color(black).alpha(0.5).rgb().string(),
    notification: pinkA100,
  },
};

export default DarkTheme;