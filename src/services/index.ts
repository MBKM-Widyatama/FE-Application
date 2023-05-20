import axios, { CreateAxiosDefaults } from 'axios'
import {
  responseInterceptor,
  errorInterceptor,
  requestInterceptor,
} from './interceptors'

export const defaultConfig: CreateAxiosDefaults = {
  headers: {
    'device-id': 'xyz',
    'Accept-Language': 'id',
  },
}

export const call = axios.create({
  ...defaultConfig,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
call.interceptors.response.use(responseInterceptor, errorInterceptor)
call.interceptors.request.use(requestInterceptor, errorInterceptor)
