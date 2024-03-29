export interface Faculty {
  id: string
  name: string
  leader: string
  created_at: number
  updated_at: number
  deleted_at: number
}

export interface PayloadFaculty {
  name: string
  leader: string
}
