import { useState } from 'react'
import { Card, Button, Row, Col, Form, Input } from 'antd'

export default function PaymentInfo() {
  const [payments, setPayments] = useState([])
  const [form] = Form.useForm()

  const onFinish = (values) => {
    setPayments([...payments, values])
    form.resetFields()
  }

  const deletePayment = (index) => {
    setPayments(payments.filter((_, i) => i !== index))
  }

  const editPayment = (index, values) => {
    const newPayments = [...payments]
    newPayments[index] = values
    setPayments(newPayments)
  }

  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <div className='grid grid-cols-2 gap-4  '>
          <div className='grid'>
            <h3>Billing Information</h3>
            <div className='grid'>
              <div className='grid grid-cols-2'>
                <Form.Item
                  name='firstName'
                  rules={[{ required: true }]}
                  label='First Name'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Input placeholder='First Name' className='col-span-1' />
                </Form.Item>
                <Form.Item
                  name='lastName'
                  rules={[{ required: true }]}
                  label='Last Name'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Input placeholder='Last Name' className='col-span-1' />
                </Form.Item>
              </div>
            </div>

            <div className='grid'>
              <Form.Item
                name='address'
                rules={[{ required: true }]}
                label='Address'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder='Address' className='col-span-1' />
              </Form.Item>
            </div>

            <div className='grid'>
              <Form.Item
                name='city'
                rules={[{ required: true }]}
                label='City'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder='City' className='col-span-1' />
              </Form.Item>
            </div>

            <div className='grid'>
              <div className='grid grid-cols-2'>
                <Form.Item
                  name='country'
                  rules={[{ required: true }]}
                  label='Country/Region'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Input placeholder='Country/Region' className='col-span-1' />
                </Form.Item>
                <Form.Item
                  name='Postal'
                  rules={[{ required: true }]}
                  label='Postal/Zip code'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Input placeholder='Postal/Zip code' className='col-span-1' />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className='grid' style={{ height: 'fit-content' }}>
            <h3>Payment Information</h3>
            <Form.Item
              name='cardNumber'
              rules={[{ required: true }]}
              label='Card Number'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder='Card Number' className='col-span-1' />
            </Form.Item>
            <Form.Item
              name='cvv'
              rules={[{ required: true }]}
              label='CVV'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder='CVV' className='col-span-1' />
            </Form.Item>
            <Form.Item
              name='expiration'
              rules={[{ required: true }]}
              label='Expiration Date'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder='Expiration Date' className='col-span-1' />
            </Form.Item>
          </div>
        </div>

        <Button type='primary' htmlType='submit' className='col-span-2'>
          Add Payment
        </Button>
      </Form>

      {payments.length === 0 ? (
        <Button type='primary' onClick={() => form.resetFields()}>
          Add Payment
        </Button>
      ) : (
        payments.map((payment, index) => (
          <Card key={index}>
            <Row>
              <Col span={12}>{payment.cardName}</Col>
              <Col span={12}>{payment.cardNumber}</Col>
            </Row>
            <Row>
              <Button
                type='primary'
                onClick={() => editPayment(index, form.getFieldsValue())}
              >
                Edit
              </Button>
              <Button type='danger' onClick={() => deletePayment(index)}>
                Delete
              </Button>
            </Row>
            <Button type='primary' onClick={() => form.resetFields()}>
              Add More Payment Info
            </Button>
          </Card>
        ))
      )}
    </div>
  )
}
