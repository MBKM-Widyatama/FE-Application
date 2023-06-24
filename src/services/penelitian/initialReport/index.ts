import { call } from '../..'

import { Pagination } from '../../types'
import { InitialReport, PayloadInitialReport } from './types'

const url = 'penelitian'

export default {
  get: () => call.get<null, Pagination<InitialReport[]>>(url),
  create: (payload: PayloadInitialReport) =>
    call.post<PayloadInitialReport, InitialReport>(url, payload),
  update: (payload: PayloadInitialReport, id: string) =>
    call.put<PayloadInitialReport, InitialReport>(`${url}/${id}`, payload),
  remove: (id: string) => call.delete<null, InitialReport>(`${url}/${id}`),
}
