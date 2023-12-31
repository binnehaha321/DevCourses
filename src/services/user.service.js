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
  getinfo() {
    // Thực hiện yêu cầu GET với cấu hình đã tạo
    return request.get('https://course.spacedev.vn/users')
  },
  updateinfo(data) {
    return request.patch('https://course.spacedev.vn/users', data)
  }
}
