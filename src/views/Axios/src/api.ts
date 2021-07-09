import request from '@/utils/request'

export const getUserInfo = (userName: string) => {
  return request.get(`githubApi/users/${userName}`, { a: 1, b: 2 }, {})
}
