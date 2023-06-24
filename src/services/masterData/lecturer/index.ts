import { call } from '../..'

import { Pagination } from '../../types'
import { Lecturer, PayloadLecturer } from './types'

const url = 'master-lecturer'

export default {
  get: () => call.get<null, Pagination<Lecturer[]>>(url),
  create: (payload: PayloadLecturer) =>
    call.post<PayloadLecturer, Lecturer>(url, payload),
  update: (payload: PayloadLecturer, id: string) =>
    call.put<PayloadLecturer, Lecturer>(`${url}/${id}`, payload),
  remove: (id: string) => call.delete<null, Lecturer>(`${url}/${id}`),
}
