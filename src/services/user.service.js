import request from '../api/axios'
export const userservice = {
  register(data) {
    return request.post('https://course.spacedev.vn/users/register', data)
  },
  resetPassword(data) {
    return request.post('https://course.spacedev.vn/users/reset-password', data)
  },
  changePasswordByCode(data) {
    return request.post(
      'https://course.spacedev.vn/users/change-password-by-code',
      data
    )
  },
  getinfo(token) {
    // Tạo một đối tượng cấu hình (config) cho yêu cầu GET
    const config = {
      headers: {
        Authorization: `Bearer ${token.accessToken}`
      }
    }

    // Thực hiện yêu cầu GET với cấu hình đã tạo
    return request.get('https://course.spacedev.vn/users', config)
  },
  updateinfo(data, token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token.accessToken}`
      }
    }
    return request.patch('https://course.spacedev.vn/users', data, config)
  }
}
