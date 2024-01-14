import { useState } from 'react'
import { Button, Modal, message } from 'antd'
import Input from '../../components/Input'
import Card from '../../components/Card'
import { useForm } from '../../hooks'
import { payment } from '../../services/payment.service'
import { getToken } from '../../lib/token'
function Payment() {
  const { validate, register, form, setForm } = useForm({
    cardName: [{ required: true }],
    cardNumber: [{ required: true }],
    cvv: [{ required: true }],
    expired: [{ required: true }],
    
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = async() => {
    
    form['type'] ='card'
    console.log(form)
    console.log(validate())
    const res = await payment.addPayment(form,getToken())
        console.log(res)
    try {
      if (validate()) {
        
        const res = await payment.addPayment(form,getToken())
        console.log(res)
        if (res) {
          
          await message.success('Add new card successfully', [2])
          setForm({})
          setIsModalOpen(false)
        }
      }
    } catch (err) {
      message.error('Error', [3])
    }
  }
  const handleCancel = () => {
    setIsModalOpen(false)
    
  }
  
  return (
    <div>
      <h1 className='font-bold text-2xl mt-11'>List your card</h1>
      <Button
        onClick={showModal}
        className='bg-indigo-800 font-bold text-white mt-3 mb-3'
      >
        {' '}
        Add Card
      </Button>
      <Modal
        title='Add new Card'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className='flex flex-col gap-6'>
          <Input {...register('cardName')} placeholder='cardName' />
          <Input {...register('cardNumber')} placeholder='cardNumber' />
          <Input {...register('cvv')} placeholder='cvv' />
          <Input {...register('expired')} placeholder='expired' type ='date' />
          <Input {...register('type')} value ='Card' placeholder='Card' disabled='disabled'/>
        </form>
      </Modal>
      <div>
        <Card
          cardNumber='000 123 567'
          cardName='Tu Cong Danh'
          expired='12/02'
        />
      </div>
    </div>
  )
}

export default Payment
