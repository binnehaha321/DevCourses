import { message } from 'antd'
import loginImage from '../../assets/images/login.png'
import Input from '../../components/Input'
import envelope from '../../assets/svgs/envelope.svg'
import shieldslash from '../../assets/svgs/shield-slash.svg'
import Buttonlogin from '../../components/Button/buttonlogin'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useAsync } from '../../hooks/useAsync'
import { useAuth } from '../../hooks/useAuth'
import { authenticationservice } from '../../services/authentication.service'

export default function Login() {
  const navigate = useNavigate()
  const { loading, disable, execute, setDisable } = useAsync(
    authenticationservice.login
  )
  const { validate, register, form } = useForm({
    username: [
      { required: true },
      {
        regexp: 'username',
        message: 'Vui long nhap dung email'
      }
    ],
    password: [{ required: true }]
  })
  const { login } = useAuth()
  const onSubmit = async (ev) => {
    ev.preventDefault()
    try {
      ev.preventDefault()
      if (validate()) {
        const res = await execute(form)
        // console.log(res)
        if(res){
        login(res)
        setDisable(true)
        await message.success('Đăng nhập thành công', [2])   
        setDisable(false)
        navigate("/home")
        }
        else{
        setDisable(true)
        await message.error('Error', [2])
        setDisable(false)
        }
      }
    } catch (err) {
      message.error('Error', [3])
    }
  }

  return (
    <div className='container-fluid flex flex-row h-screen w-screen'>
      <div className='basis-1/2 flex justify-center items-center'>
        <div className='w-5/6 h-5/6 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-4xl mb-6'>Login to Your Account</h1>
          <form
            className='w-full flex flex-col justify-center items-center'
            onSubmit={onSubmit}
          >
            <div className='w-4/5 flex flex-col gap-7 items-center mb-1'>
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
            </div>

            <Link
              className='mb-1 mt-3 font-semibold text-blue-700'
              to='/forgotpassword'
            >
              Forgot Password
            </Link>
            <Buttonlogin disable={disable} loading={loading} type='submit'>
              Login
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
        <img className='h-full w-full' src={loginImage} alt='login' />
      </div>
    </div>
  )
}
