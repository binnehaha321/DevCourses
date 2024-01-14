import { message } from 'antd'
import Input from '../../components/Input'
import Buttonlogin from '../../components/Button/buttonlogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { useForm, useAsync } from '../../hooks'
import { organization } from '../../services/organization.service'
export default function Contact() {
  const { loading, disable, execute, setDisable } = useAsync(
    organization.contact
  )
  const { validate, register, form } = useForm({
    name: [{ required: true }],
    email: [
      { required: true },
      {
        regexp: 'email',
        message: 'Vui long nhap dung email'
      }
    ],
    phone: [{ required: true }, {
      regexp: 'phone',
      message: 'Vui long nhap dung so dien thoai'
    }],
    website: [{ required: true },{
      regexp: 'website',
      message: 'Vui long nhap dung dia chi website'
    }],
    title: [{ required: true }],
    content: [{ required: true }]
  })
  const onSubmit = async (ev) => {
    ev.preventDefault()
    console.log(validate())
    try {
      if (validate()) {
        const res = await execute(form)
        console.log(res)
        if (res) {
          setDisable(true)
          await message.success('Gửi thành công', [2])
          setDisable(false)
        }
      }
    } catch (err) {
      message.error('Error', [3])
    }
  }
  return (
    <div className='flex flex-row  gap-6'>
      <div className='basis-5/12 flex flex-col npm items-center mt-11'>
        <h1 className=' font-bold text-4xl mt-11'> Let&apos;s talk with us</h1>
        <p className='mt-5'>
          Questions, comments, or suggestions? Simply fill in the form and we’ll
          be in touch shortly.
        </p>
        <div className='mt-8 flex flex-col gap-5'>
          <div className='flex flex-row items-center gap-4'>
            <FontAwesomeIcon icon={faLocationDot} />
            <p className='font-bold'>
              1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.
            </p>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <FontAwesomeIcon icon={faPhone} />
            <p className='font-bold'>+94 62614497</p>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <FontAwesomeIcon icon={faEnvelope} />
            <p className='font-bold'>Contact@moralizer.com</p>
          </div>
        </div>
      </div>
      <div className='basis-7/12 mt-11'>
        <form
          onSubmit={onSubmit}
          className='mt-11 flex flex-col gap-5 rounded-lg border border-solid border-gray-400 bg-white shadow-md p-6'
        >
          <Input {...register('name')} placeholder='Name'></Input>
          <Input {...register('email')} placeholder='Email'></Input>
          <Input {...register('phone')} placeholder='Phone'></Input>
          <Input {...register('website')} placeholder='Website'></Input>
          <Input {...register('title')} placeholder='Title'></Input>
          <textarea
            {...register('content')}
            className='rounded-lg p-3 border border-solid border-gray-400 bg-white'
            placeholder='Content'
          ></textarea>
          <Buttonlogin
            style={{ width: '100%' }}
            disable={disable}
            loading={loading}
          >
            Send Message
          </Buttonlogin>
        </form>
      </div>
    </div>
  )
}
