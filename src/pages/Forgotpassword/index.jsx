import { Link } from 'react-router-dom'
import { message } from 'antd'

import { userservice } from '../../services/user.service'
import { useForm, useAsync } from '../../hooks'

import envelope from '../../assets/svgs/envelope.svg'
import login from '../../assets/images/login.png'
import Input from '../../components/Input'
import Buttonlogin from '../../components/Button/buttonlogin'

export default function ForgotPassword() {
  const { loading, disable, execute, setDisable } = useAsync(
    userservice.resetPassword
  )
  const { validate, register, form } = useForm({
    username: [
      { required: true },
      {
        regexp: 'username',
        message: 'Vui long nhap dung email'
      }
    ]
  })

  const onSubmit = async (ev) => {
    try {
      ev.preventDefault()

      if (validate()) {
        const res = await execute(form)
        console.log(res)
        setDisable(true)
        await message.success(res.data.message, [2])
        setDisable(false)
      } else {
        console.log('validate error')
      }
    } catch (err) {
      // message.error('Username or Password incorrect', [3])
    }
  }

  return (
    <div className='container-fluid flex flex-row h-screen w-screen'>
      <div className='basis-1/2 flex justify-center items-center'>
        <div className='w-5/6 h-5/6 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-4xl mb-6'>Forgot your password?</h1>
          <form
            className='w-full flex flex-col justify-center items-center'
            onSubmit={onSubmit}
          >
            <div className='w-full flex flex-col gap-7 items-center mb-6'>
              <Input
                {...register('username')}
                placeholder='Email'
                icon={envelope}
              />
            </div>

            <Buttonlogin disable={disable} loading={loading} type='submit'>
              Submit
            </Buttonlogin>
          </form>
          <div className='w-full gap-1 flex justify-center mt-3'>
            <p>Don’t have account? </p>
            <span>
              <Link className='font-semibold text-blue-700' to='/register'>
                Create an account
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className='basis-1/2 '>
        <img className='h-full w-full' src={login} alt='login' />
      </div>
    </div>
  )
}
