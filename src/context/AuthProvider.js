import React, { useState, useContext } from 'react'

export const AuthContext = React.createContext({})

export function useAuthToken() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [authToken, setAuth] = useState('empty')
  //console.log(authToken)
  return (
    <AuthContext.Provider value={{ authToken, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
