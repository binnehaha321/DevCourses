import { useContext } from 'react'
import { createContext } from 'react'
import { setToken, getToken } from '../../lib/token'
import { userservice } from '../../services/user.service'

const AuthContext = createContext('AuthContext')
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const login = async (data) => {
    setToken(data.data.data)
    console.log(getToken())
    const infor = await userservice.getinfo(getToken())
    console.log(infor)
    // setUser(infor)
  }
  const logout = () => {
    setToken(null)
  }
  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
