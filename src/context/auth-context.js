import * as React from 'react'
import {connect} from '../utils/socketChat'

const AuthContext = React.createContext()
AuthContext.displayName = 'AuthContext'

function AuthProvider(props) {
  const [user, setUser] = React.useState('')

  const register = React.useCallback(
    username => {
      setUser(username)
      connect(username)
    },
    [setUser],
  )
  const logout = React.useCallback(() => {
    setUser(null)
  }, [setUser])

  const value = React.useMemo(() => ({user, logout, register}), [
    logout,
    register,
    user,
  ])

  return <AuthContext.Provider value={value} {...props} />
}

function useAuthentication() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export {AuthProvider, useAuthentication}
