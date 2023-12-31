import { useEffect, useState } from 'react'
import { Button, Input, Typography } from 'antd'

import { userservice } from '../../services/user.service'
import { setUser, getUser } from '../../lib/token'
import { validate } from '../../lib/validate'

import avatar from '../../assets/images/avatar.jpg'

export default function InformationUser() {
  const [stateInput, setStateInput] = useState(true)
  const [inforUser, setInforUser] = useState({})
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const user = getUser()
    // console.log(user)
    const initForm = {}
    for (const key in user) {
      initForm[key] = user[key]
    }
    setForm(initForm)
    setInforUser(user)
    // console.log(inforUser)
    async function getInfor() {
      const { data } = await userservice.getinfo()
      if (!data?.data) return
      setUser(data.data)
      const user = getUser()
      setInforUser(user)
    }
    getInfor()
  }, [])

  const _validate = () => {
    const errorObject = validate(
      { username: [{ required: true }], name: [{ required: true }] },
      form
    )
    setErrors(errorObject)
    return Object.keys(errorObject).length === 0
    // return errorObject
  }
  const register = (name) => {
    // form[name]=String(inforUser[name])
    return {
      value: form[name] || String(inforUser[name]),
      onChange: (ev) => {
        setForm({ ...form, [name]: ev.target.value })
      },
      error: errors[name]
    }
  }

  const informationUser = [
    { name: 'Email', disabled: stateInput, data: 'username' },
    { name: 'Name', disabled: stateInput, data: 'name' },
    { name: 'Facebook', disabled: stateInput, data: 'fb' },
    { name: 'Birthday', disabled: stateInput, type: 'date', data: 'birthday' },
    { name: 'Gender', disabled: stateInput, data: 'gender' },
    { name: 'Phone', disabled: stateInput, data: 'phone' }
  ]
  const updateInfor = () => {
    setStateInput(false)

    // console.log(validate())
  }

  const saveInfor = async () => {
    // setStateInput(true)
    console.log(form)
    console.log(_validate())
    const res = await userservice.updateinfo(form)
    console.log(res)
    // setInforUser(res)
    setStateInput(true)
  }

  return (
    <div className='container-fluid px-4 bg-blue-500 bg-opacity-5 h-screen'>
      <h1 className='text-2xl  font-bold pt-4 mb-5'>User Profile</h1>
      <div className='flex w-full justify-between items-center pb-6 border-b border-slate-400'>
        <img className='rounded-full h-28 w-28' src={avatar} alt='' />
        <button
          className=' bg-blue-800 h-14 rounded-lg text-white text-center font-bold px-6'
          onClick={updateInfor}
        >
          Update information
        </button>
        <button className='bg-red-500 h-14 rounded-lg text-white text-center font-bold px-6'>
          Delete Account
        </button>
      </div>
      <div className='flex flex-col gap-4 mt-2 mb-4'>
        {informationUser?.map((user, index) => {
          return (
            <div key={index}>
              <Typography.Title level={5}>{user.name}</Typography.Title>
              <Input
                // defaultValue='Hello, antd!'
                type={user.type}
                {...register(user.data)}
                disabled={stateInput}
              />
            </div>
          )
        })}
      </div>
      <Button onClick={saveInfor} disabled={stateInput} className='bg-blue-500'>
        Save
      </Button>
    </div>
  )
}
