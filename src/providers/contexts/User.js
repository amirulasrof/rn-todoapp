import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// constant
import * as Constant from '../../utils/constant';

const Context = createContext();

// wrapper for <App />
const UserProvider = ({children}) => {
  
  const [user, setUser] = useState('')

  // init
  useEffect(() => {
    AsyncStorage.getItem(Constant.loginKey)
    .then(data => {
      // console.log(data)
      if(data)
        setUser(JSON.parse(data))
    })
  }, [])

  // listen to user change
  useEffect(() => {
    AsyncStorage.setItem(Constant.loginKey, JSON.stringify(user))
  }, [user])

  return (
    <Context.Provider value={{user, setUser}}>
      {children}
    </Context.Provider>
  )
} 

// why not export const ? it cause user == null
export default UserProvider

// to call on respective page
export const UserContext = Context

// to consume on
export const UserConsumer = UserContext.Consumer

