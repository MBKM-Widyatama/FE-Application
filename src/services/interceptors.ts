import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'
import { CommonApiResult } from './types'

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const newConfig = { ...config }
  newConfig.url = `v1/${config.url}`

  if (newConfig.headers['Content-Type'] === 'multipart/form-data') {
    return newConfig
  }

  return newConfig
}

export const responseInterceptor = (res: AxiosResponse<CommonApiResult>) =>
  res.data.data

export const errorInterceptor = (err: any) => err
