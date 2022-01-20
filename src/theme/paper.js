import { DefaultTheme, Provider, configureFonts } from 'react-native-paper';

 // https://github.com/callstack/react-native-paper/blob/master/src/styles/DefaultTheme.tsx

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

  const theme = {
    ...DefaultTheme,
    roundness: 4,
    dark: false,
    fonts: configureFonts(fontConfig),
    colors: {
      ...DefaultTheme.colors,
      primary: '#ee3439',
      
      accent: '#f1c40f',
      background: '#f1f1f1',
      placeholder: 'grey'
    },
  };

  export default theme;