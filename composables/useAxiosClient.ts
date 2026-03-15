import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'
import { useNotification } from 'naive-ui'

export default function useAxiosClient(): AxiosInstance {
  const config = useRuntimeConfig()
  const { getAccessToken, refreshAccessToken } = useAuth()
  const router = useRouter()
  const notification = useNotification()

  const client = axios.create({
    baseURL: config.public.NUXT_PUBLIC_API_BASE_URL,
  })

  client.interceptors.request.use((cfg) => {
    const token = getAccessToken()
    if (token) {
      cfg.headers = {
        ...(cfg.headers || {}),
        Authorization: `Bearer ${token}`,
      }
    }
    return cfg
  })

  const ignoreList = ['/auth', '/auth/refresh']

  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const status = error.response?.status
      const url = String(error.config?.url || '')
      const message =
        (error.response?.data as any)?.error ||
        (error.response?.data as any)?.message ||
        error.message ||
        'Unknown server error'

      notification.error({
        title: 'Error',
        content: String(message),
        duration: 3000,
      })

      if (status === 401 && !ignoreList.some((p) => url.includes(p))) {
        const refreshed = await refreshAccessToken()
        if (refreshed && error.config) {
          error.config.headers = {
            ...(error.config.headers || {}),
            Authorization: `Bearer ${getAccessToken()}`,
          }
          return client.request(error.config as AxiosRequestConfig)
        }
      } else if (url.includes('/auth/refresh') && status === 401) {
        setTimeout(() => {
          router.go(0)
        })
      }

      return Promise.reject(error)
    }
  )

  return client
}
