import { configureFonts } from 'react-native-paper';

const fontConfig = {
  // all platform use this
  default: {
    regular: { fontFamily: 'OpenSans-Regular' },
    medium: { fontFamily: 'OpenSans-Bold' },
    light: { fontFamily: 'OpenSans-Light' },
    thin: { fontFamily: 'OpenSans-Light'},
  },
  ios: {
    regular: { fontFamily: 'OpenSans-Regular' },
    medium: { fontFamily: 'OpenSans-Bold' },
    light: { fontFamily: 'OpenSans-Light' },
    thin: { fontFamily: 'OpenSans-Light'},
  },
  android: {
    regular: { fontFamily: 'OpenSans-Regular' },
    medium: { fontFamily: 'OpenSans-Bold' },
    light: { fontFamily: 'OpenSans-Light' },
    thin: { fontFamily: 'OpenSans-Light'},
  },
  web: {
    regular: { fontFamily: 'OpenSans-Regular' },
    medium: { fontFamily: 'OpenSans-Bold' },
    light: { fontFamily: 'OpenSans-Light' },
    thin: { fontFamily: 'OpenSans-Light'},
  }
}

fontConfig.ios = fontConfig.default;
fontConfig.android = fontConfig.default;

export const fonts = configureFonts(fontConfig);