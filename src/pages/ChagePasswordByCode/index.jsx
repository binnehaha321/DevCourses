import { useSearchParams, useNavigate } from 'react-router-dom'
import { message } from 'antd'
import login from '../../assets/images/login.png'
import Input from '../../components/Input'
import shield from '../../assets/svgs/shield-slash.svg'
import Buttonlogin from '../../components/Button/buttonlogin'
import { useForm } from '../../hooks/useForm'
import { userservice } from '../../services/user.service'
import { useAsync } from '../../hooks/useAsync'

export default function ChangePasswordByCode() {
  const { loading, disable, execute, setDisable } = useAsync(
    userservice.changePasswordByCode
  )
  const { validate, register, setErrors, form } = useForm({
    password: [{ required: true }],
    confirmpassword: [{ required: true }]
  })
  const [search] = useSearchParams()
  const code = search.get('code')

  const navigate = useNavigate()

  const onSubmit = async (ev) => {
    try {
      ev.preventDefault()
      //   console.log(code)
      if (form.password !== form.confirmpassword) {
        // errors.confirmpassword = 'Vui long nhap giong password'
        validate()
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmpassword: 'Vui long nhap giong password'
        }))
      } else if (validate()) {
        console.log(form.password)
        console.log(code)
        const res = await execute({
          password: form.password,
          code: code
        })
        console.log(res)
        navigate('/login')
        setDisable(true)
        await message.success('Thay đổi password thành công', [4])
        setDisable(false)
      } else {
        console.log('validate error')
      }
    } catch (err) {
      message.error('Error', [3])
    }
  }

  return (
    <div className='container-fluid flex flex-row h-screen w-screen'>
      <div className='basis-1/2 flex justify-center items-center'>
        <div className='w-5/6 h-5/6 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-4xl mb-6'>Change password</h1>
          <form
            className='w-full flex flex-col justify-center items-center'
            onSubmit={onSubmit}
          >
            <div className='w-full flex flex-col gap-7 items-center mb-6'>
              <Input
                {...register('password')}
                placeholder='Password'
                icon={shield}
              />
            </div>
            <div className='w-full flex flex-col gap-7 items-center mb-6'>
              <Input
                {...register('confirmpassword')}
                placeholder='Confirm Password'
                icon={shield}
              />
            </div>

            <Buttonlogin disable={disable} loading={loading} type='submit'>
              Submit
            </Buttonlogin>
          </form>
        </div>
      </div>

      <div className='basis-1/2 '>
        <img className='h-full w-full' src={login} alt='login' />
      </div>
    </div>
  )
}
