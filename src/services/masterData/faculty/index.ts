import { call } from '../..'

import { Pagination } from '../../types'
import { Faculty, PayloadFaculty } from './types'

const url = 'master-faculties'

export default {
  get: () => call.get<null, Pagination<Faculty[]>>(url),
  create: (payload: PayloadFaculty) =>
    call.post<PayloadFaculty, Faculty>(url, payload),
  update: (payload: PayloadFaculty, id: string) =>
    call.put<PayloadFaculty, Faculty>(`${url}/${id}`, payload),
  remove: (id: string) => call.delete<null, Faculty>(`${url}/${id}`),
}
