import request from '../api/axios'
export const authenticationservice = {
  login(data) {
    return request.post(
      'https://course.spacedev.vn/authentication/v2/login',
      data
    )
  }
}
