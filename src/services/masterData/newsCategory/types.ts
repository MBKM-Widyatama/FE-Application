export interface NewsCategory {
  id: string
  faculty_id: string
  name: string
  nidn: number
  nrk: number
  profile_picture: string
  sex: string
  marital_status: string
  created_at: number
  updated_at: number
  deleted_at: number
}

export interface PayloadNewsCategory {
  faculty_id: string
  name: string
  nidn: number
  nrk: number
  profile_picture: string
  sex: string
  marital_status: string
}
