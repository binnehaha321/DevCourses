import request from '../api/axios'
export const payment = {
    getPayment(token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
      return request.get(
        'https://course.spacedev.vn/users/payment',config
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