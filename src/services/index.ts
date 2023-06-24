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
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3MmIzZDVlLTI5YjgtNDM1Yi05NjljLTBlODY4OGI5M2EyMiIsImVtYWlsIjoiYWRtaW5AYmltYXV0YW1hLmFjLmlkIiwibmFtZSI6IkFkbWluIiwicm9sZSI6IlN1cGVyIEFkbWluIiwiaWF0IjoxNjg3NTc0MzE0LCJleHAiOjE2ODc2NjA3MTQsImlzcyI6InNpbWxpdGFtYXNfdXRhbWEifQ.QxDB20PICSO9-kOovBILzeNeCZl9MUAtcxVfnec_2pgfOkq-lMvIME-7-HwfPIJcizgkGDjTImYJJ_591dVfjc9LcvGKGNbmepWxcN5U1hJ8arUIOqUbF7qHt4lE6BwBsTmeozYTaOcyQRWZojFstMAhve_jlDuwpFm8yypum6sSNEhdsH_dJV5Xw3VYnLSQ7J92Jk2qiov5-lgHsDU4SsmVqV3aBdiV8rxl4y42OGf-phlGmi1zHROHpkN-ma--H4r0l-vHJENB-snt_T8sdfLipaa6QgjBCOhkW3rHvBO3uGBGkkxzDdILFk3JlHrrEO6SE6W5qS0zWN4E3h6_hA',
  },
}

export const call = axios.create({
  ...defaultConfig,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
call.interceptors.response.use(responseInterceptor, errorInterceptor)
call.interceptors.request.use(requestInterceptor, errorInterceptor)
