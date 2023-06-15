export interface CommonApiResult<D = any> {
  data?: D
  message?: string
  status?: string
}

export interface Pagination<T> {
  content: T
  meta: {
    hasPreviousPage: boolean
    hasNextPage: boolean
    totalData: number
    total: number
    size: number
    page: number
    pageCount: number
  }
}
