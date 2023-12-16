import { useState } from 'react'
export const useAsync = (promise) => {
  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(false)
  const execute = async (...data) => {
    try {
      setLoading(true)
      setDisable(true)
      const res = await promise(...data)
      return res
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
      setDisable(false)
    }
  }
  return {
    loading,
    disable,
    execute,
    setDisable
  }
}
