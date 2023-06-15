export interface Faculty {
  id: string
  created_at: number
  updated_at: number
  deleted_at: number
  name: string
  leader: string
}

export interface PayloadFaculty {
  name: string
  leader: string
}
