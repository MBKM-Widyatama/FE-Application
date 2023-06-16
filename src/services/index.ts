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
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1MWE0M2Q5LTc3ODItNDk1Mi05OTc1LTA2MmFmODVjOTBjOSIsImVtYWlsIjoiYWRtaW5AYmltYXV0YW1hLmFjLmlkIiwibmFtZSI6IkFkbWluIiwicm9sZSI6IlN1cGVyIEFkbWluIiwiaWF0IjoxNjg2OTA2MTMxLCJleHAiOjE2ODY5MDk3MzEsImlzcyI6ImJpbWF1dGFtYS13aWR5YXRhbWEifQ.YAV2y8Vjw0AGXvFu22QXxsX730y140kXWhe8iLCYyYRt4HYfS4gCQCSeqpBakVKtFuUHkFIi9IGoRVfW5sB-CH--8TisDLSG7fH5BoNGqvkzBaZ6aX4g5zLpBTrShQ5taGn-klOCWrf3Lqc_FJI3qjW9keDkzZTn8Jyj9-r_L_RA1kW-n5fhK1lJeV--6egcmIRK4vogYSmChfxBox7QHTGzxPwzpaZ0jiIES55VAmQ46ukZF0R6PKnXdB04-F8Dhot0sZ_uqYCmNfWdnu0dyRz5be3-e6j_ivnaK2NfpieO6OM8YgXwcJC56zCZn_49KGiwvy8W5oDiuDDky0cMxw',
  },
}

export const call = axios.create({
  ...defaultConfig,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
call.interceptors.response.use(responseInterceptor, errorInterceptor)
call.interceptors.request.use(requestInterceptor, errorInterceptor)
