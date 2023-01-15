import axios from "axios"

const BASE_URL_API = import.meta.env.VITE_BASE_URL_API
const axiosClient = axios.create({
  baseURL: BASE_URL_API,
})

// axios.interceptors.request.use(authRequestInterceptor);
axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error.response?.data?.message || error.message
    /* useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    }); */

    return Promise.reject(message)
  }
)

export default axiosClient
