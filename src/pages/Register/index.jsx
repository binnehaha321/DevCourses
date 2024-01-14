import { Link } from 'react-router-dom'
import { message } from 'antd'

import { useForm } from '../../hooks/useForm'
import { useAsync } from '../../hooks/useAsync'
import { userservice } from './../../services/user.service'

import shieldslash from '../../assets/svgs/shield-slash.svg'
import registerimg from '../../assets/images/register.png'
import envelope from '../../assets/svgs/envelope.svg'
import person from '../../assets/svgs/person.svg'

import Input from '../../components/Input'
import Buttonlogin from '../../components/Button/buttonlogin'

export default function Register() {
  const { loading, disable, execute, setDisable } = useAsync(
    userservice.register
  )
  const { validate, register, form, setErrors } = useForm({
    name: [{ required: true }],
    username: [
      { required: true },
      {
        regexp: 'username',
        message: 'Vui long nhap dung email'
      }
    ],
    password: [{ required: true }],
    confirmpassword: [{ required: true }]
  })

  const onSubmit = async (ev) => {
    try {
      ev.preventDefault()
      console.log(form)
      if (form.password !== form.confirmpassword) {
        // errors.confirmpassword = 'Vui long nhap giong password'
        validate()
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmpassword: 'Vui long nhap giong password'
        }))
      } else if (validate()) {
        console.log(1)
        const res = await execute(form)
        console.log(res)
        setDisable(true)
        await message.success(res.data.message, [4])
        setDisable(false)
        // message.success('Đăng nhập thành công', [4])
      } else {
        console.log('validate error')
      }
    } catch (err) {
      message.error('Tài khoản này đã tồn tại', [3])
    }
  }

  return (
    <div className='container-fluid flex flex-row h-screen w-screen'>
      <div className='basis-1/2 flex justify-center items-center'>
        <div className='w-5/6 h-5/6 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-4xl mb-6'>Create your account</h1>
          <form
            className='w-full flex flex-col justify-center items-center'
            onSubmit={onSubmit}
          >
            <div className='w-full flex flex-col gap-7 items-center mb-1'>
              <Input
                {...register('name')}
                placeholder='Username'
                icon={person}
              />
              <Input
                {...register('username')}
                placeholder='Email'
                icon={envelope}
              />
              <Input
                {...register('password')}
                placeholder='Password'
                icon={shieldslash}
                type={'password'}
              />
              <Input
                {...register('confirmpassword')}
                placeholder='Confirm Password'
                icon={shieldslash}
                type={'password'}
              />
            </div>

            <Link
              className='mb-1 mt-3 font-semibold text-blue-700'
              to='/forgotpassword'
            >
              Forgot Password
            </Link>
            <Buttonlogin disable={disable} loading={loading} type='submit'>
              Submit
            </Buttonlogin>
          </form>
          <div className='w-full gap-1 flex justify-center mt-3'>
            <p>Don’t have account? </p>
            <span>
              <Link className='font-semibold text-blue-700' to='/login'>
                Login now
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className='basis-1/2 '>
        <img className='h-full w-full' src={registerimg} alt='login' />
      </div>
    </div>
  )
}
