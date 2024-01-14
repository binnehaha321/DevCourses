import request from '../api/axios'
export const payment = {
    getPayment() {
      return request.get(
        'https://course.spacedev.vn/users/payment',
      )
    },
    addPayment(data,token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
        return request.post(
          'https://course.spacedev.vn/users/payment',
          data, config
        )
      }

  }