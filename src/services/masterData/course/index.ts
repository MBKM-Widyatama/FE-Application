import { call } from '../..'

import { Pagination } from '../../types'
import { Course, PayloadCourse } from './types'

const url = 'master-courses'

export default {
  get: () => call.get<null, Pagination<Course[]>>(url),
  create: (payload: PayloadCourse) =>
    call.post<PayloadCourse, Course>(url, payload),
  update: (payload: PayloadCourse, id: string) =>
    call.put<PayloadCourse, Course>(`${url}/${id}`, payload),
  remove: (id: string) => call.delete<null, Course>(`${url}/${id}`),
}
