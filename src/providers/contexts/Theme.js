import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// constant
import * as Constant from '../../utils/constant';

const Context = createContext();

// wrapper for <App />
const ThemeProvider = ({children}) => {

  const [mode, setMode] = useState('');

  // init
  useEffect(() => {
    AsyncStorage.getItem(Constant.darkModeKey)
    .then(data => {
      // console.log(data)
      if(data)
        setMode(data)
      else 
        setMode('light')
    })
  }, [])

  // listen to user change
  useEffect(() => {
    AsyncStorage.setItem(Constant.darkModeKey, mode)
  }, [mode])

  return (
    <Context.Provider value={{mode, setMode}}>
      {children}
    </Context.Provider>
  )
} 

export default ThemeProvider

// to call on respective page
export const ThemeContext = Context

// to consume on
export const ThemeConsumer = ThemeContext.Consumer


