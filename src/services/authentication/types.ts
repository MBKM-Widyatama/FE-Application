export interface PayloadSignIn {
  username: string
  password: string
}

export interface PayloadGetUser {
  username: string
}

export interface Users {
  name: string
  email: string
  gender: string
  age: number
  title: string
}
