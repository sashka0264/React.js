import * as axios from "axios";

const base = axios.create({
  withCredentials: true,
  // withCredentials (переводится как ваша авторизованность) - чтобы цепануть cookie 
  headers: {"API-KEY":"9c4c0b67-afad-4fc5-8099-60e295f78a94"}
});
const getUsers = (currentPage = 1, pageSize = 10) => {
  return base.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
}
const getMe = () => {
  return base.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    .then(response => response.data)
}
const getProfile = (userId) => {
  return base.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response => response.data)
}
const getDeleteUser = (id) => {
  return base.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    .then(response => response.data)
}
const getPostUser = (id) => {
  return base.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    .then(response => response.data)
}

export {
  getUsers, 
  getMe, 
  getProfile, 
  getDeleteUser, 
  getPostUser
};