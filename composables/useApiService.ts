import type { AxiosRequestConfig } from 'axios'
import useAxiosClient from './useAxiosClient'

export type AxiosRequestOptions = AxiosRequestConfig & { immediate?: boolean }

export default function useApiService() {
  const client = useAxiosClient()

  const request = async <T = any>(config: AxiosRequestConfig) => {
    const data = ref<T | null>(null)
    const error = ref<any>(null)

    try {
      const response = await client.request<T>(config)
      data.value = response.data
    } catch (e: any) {
      error.value = e
    }

    return { data, error }
  }

  const useAxiosRequest = <T = any>(config: AxiosRequestOptions) => {
    const data = ref<T | null>(null)
    const error = ref<any>(null)
    const loading = ref(false)

    const execute = async (override: AxiosRequestOptions = {}) => {
      loading.value = true
      error.value = null
      try {
        const { immediate: _immediate, ...requestConfig } = {
          ...config,
          ...override,
        }
        const response = await client.request<T>(requestConfig)
        data.value = response.data
      } catch (e: any) {
        error.value = e
      } finally {
        loading.value = false
      }
    }

    if (config.immediate !== false) {
      execute()
    }

    return { data, error, loading, execute }
  }

  const auth = {
    login: (body: any) => request({ url: '/api/v1/auth/login', method: 'POST', data: body }),
    refresh_token: (body: any) => request({ url: '/api/v1/auth/refresh', method: 'POST', data: body }),
    logout: () => request({ url: '/api/v1/auth/logout', method: 'POST' }),
  }

  const users = {
    get: useAxiosRequest({ url: '/api/v1/users', method: 'GET' }),
  }

  const Users = {
    UsersController_create: (body: any) => request({ url: '/api/v1/users', method: 'POST', data: body }),
  }

  const Objects = {
    ObjectsController_findAll: (params?: any) =>
      useAxiosRequest({ url: '/api/v1/objects', method: 'GET', params }),
    ObjectsController_create: (body: any) => request({ url: '/api/v1/objects', method: 'POST', data: body }),
    ObjectsController_update: (id: string | number, body: any) =>
      request({ url: `/api/v1/objects/${id}`, method: 'PATCH', data: body }),
  }

  return {
    auth,
    Auth: auth,
    users,
    Users,
    Objects,
  }
}
