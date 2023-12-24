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
  }
}
