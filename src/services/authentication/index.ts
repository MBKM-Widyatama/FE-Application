import { call } from '..'
import { PayloadGetUser, PayloadSignIn, Users } from './types'

export const signIn = (data: PayloadSignIn) => call.post('auth/sign-in', data)

export const getUser = (params: PayloadGetUser) =>
  call.get<null, Users>('master/user', { params })
