
import { createContext } from 'react'
import { setToken, getToken, setUser } from '../../lib/token'
import { userservice } from '../../services/user.service'

export const AuthContext = createContext('AuthContext')
// export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const login = async(data) => {
    setToken(data.data.data)
    const infor = await userservice.getinfo(getToken())
    setUser(infor.data.data)
  }
  const logout = () => {
    setToken(null)
    setUser(null)
  }
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
