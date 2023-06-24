import { call } from '../..'

import { Pagination } from '../../types'
import { NewsCategory, PayloadNewsCategory } from './types'

const url = 'master-categorial-news'

export default {
  get: () => call.get<null, Pagination<NewsCategory[]>>(url),
  create: (payload: PayloadNewsCategory) =>
    call.post<PayloadNewsCategory, NewsCategory>(url, payload),
  update: (payload: PayloadNewsCategory, id: string) =>
    call.put<PayloadNewsCategory, NewsCategory>(`${url}/${id}`, payload),
  remove: (id: string) => call.delete<null, NewsCategory>(`${url}/${id}`),
}
