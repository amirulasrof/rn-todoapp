import React, { createContext, useState } from 'react';

const Context = createContext();

// wrapper for <App />
const CrudSessionProvider = ({children}) => {
  
  const [crudSession, setCrudSession] = useState('282cae4681a54261a10960954fea5798')

  return (
    <Context.Provider value={{crudSession, setCrudSession}}>
      {children}
    </Context.Provider>
  )
} 

// why not export const ? it cause user == null
export default CrudSessionProvider

// to call on respective page
export const CrudSessionContext = Context

// to consume on
export const CrudSessionConsumer = CrudSessionContext.Consumer

