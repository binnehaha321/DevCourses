import request from '../api/axios'
export const organization = {
    contact(data) {
      return request.post(
        'https://course.spacedev.vn/organization/contact',
        data
      )
    }
  }