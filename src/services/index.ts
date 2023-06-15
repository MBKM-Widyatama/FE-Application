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
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1MWE0M2Q5LTc3ODItNDk1Mi05OTc1LTA2MmFmODVjOTBjOSIsImVtYWlsIjoiYWRtaW5AYmltYXV0YW1hLmFjLmlkIiwibmFtZSI6IkFkbWluIiwicm9sZSI6IlN1cGVyIEFkbWluIiwiaWF0IjoxNjg2ODE0MzQ5LCJleHAiOjE2ODY4MTc5NDksImlzcyI6ImJpbWF1dGFtYS13aWR5YXRhbWEifQ.XJ9LGaNoZdA180jhDkjqMlHQWz9oH2U6VK0xwMNp24gh5-B22KMs-PveNJhT2WL35zyw5k3QhDuYwo-K68Nl73flXnDpYUqgCuisNghD8oM3fsMPoYYR93pK7v_ipD_HX1EzxiAkaSPvTvzs3-ym6JzrhnHzIa_XVGyNRlDQ56cWDIJLCopQjN0sBFZNbFo3lfobQC12-nwhJ3zIjuaMNIClpHxuiQBXTFday4A6S1mbaLCY_s4NmZIZIHbP5058DYesohswSxePU1nApxz-WYBzV_UlQPlcvPverwhqwWiZqa4l-4zRfLGw1cP_z6yaTlkYPlzyoo7Djq-E1Dqmnw',
  },
}

export const call = axios.create({
  ...defaultConfig,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
call.interceptors.response.use(responseInterceptor, errorInterceptor)
call.interceptors.request.use(requestInterceptor, errorInterceptor)
