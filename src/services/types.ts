export interface CommonApiResult<D = any> {
  data?: D
  message?: string
  status?: string
}
