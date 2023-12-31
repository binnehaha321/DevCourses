import { createContext, useContext } from 'react'
import { useAsync } from './useAsync'
import { useForm } from './useForm'
export const AuthContext = createContext('AuthContext')
const useAuth = () => useContext(AuthContext)

export { useAsync, useForm, useAuth }
