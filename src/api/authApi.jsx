import axiosClient from "../utils/axios"

const authApi = {
  login: (userData) => {
    return axiosClient.post("/login", userData)
  },

  register: (registerData) => {
    return axiosClient.post("/register", registerData)
  },
}

export default authApi
