import request from '../api/axios'
export const userservice = {
  register(data) {
    return request.post('https://course.spacedev.vn/users/register', data)
  },
  resetpassword(data) {
    return request.post('https://course.spacedev.vn/users/reset-password', data)
  },
  changepasswordbycode(data) {
    return request.post(
      'https://course.spacedev.vn/users/change-password-by-code',
      data
    )
  }
}
