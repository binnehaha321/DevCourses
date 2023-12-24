import { useState } from 'react'
import { validate } from '../lib/validate'

/*
    @param {*} rules
    @returns values, errors, register , validate
*/

export const useForm = (rules) => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const register = (name) => {
    return {
      value: form[name] || '',
      onChange: (ev) => {
        setForm({ ...form, [name]: ev.target.value })
      },
      error: errors[name]
    }
  }
  const _validate = () => {
    const errorObject = validate(rules, form)
    setErrors(errorObject)
    return Object.keys(errorObject).length === 0
    // return errorObject
  }

  return {
    form,
    errors,
    setErrors,
    validate: _validate,
    register
  }
}
