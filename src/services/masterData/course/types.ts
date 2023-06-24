export interface Course {
  id: string
  name: string
  leader_id: string
  created_at: number
  updated_at: number
  deleted_at: number
}

export interface PayloadCourse {
  name: string
}
