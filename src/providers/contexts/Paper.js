import React, { useContext } from 'react'
import { Provider } from 'react-native-paper';

// import theme from '../../theme/paper';

import DefaultTheme from '../../theme/DefaultTheme';
import DarkTheme from '../../theme/DarkTheme'; 

import { ThemeContext } from '../../providers/contexts/Theme';

// wrapper for <App />
const PaperProvider = ({children}) => {

  const {mode} = useContext(ThemeContext);

  return (
    <Provider theme={mode == 'dark' ? DarkTheme : DefaultTheme}>
      {children}
    </Provider>
  )
} 

export default PaperProvider;

