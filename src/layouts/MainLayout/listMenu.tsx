import React, { ReactFragment } from 'react'

// Assets
import {
  ICDashboard,
  ICAbimas,
  ICPublications,
  ICResearch,
  ICDashboardLight,
} from '@utama/assets/icons'

export interface Menu {
  label: string
  path: string
  icon: string
  iconActive: string
  children?: {
    label: string
    path: string
  }[]
}

export const listMenu: Menu[] = [
  {
    label: 'Dashboard',
    path: '/cms/dashboard',
    icon: ICDashboard,
    iconActive: ICDashboardLight,
  },
  {
    label: 'Master Data',
    path: '',
    icon: ICResearch,
    iconActive: '',
    children: [
      {
        label: 'Users',
        path: '/cms/users',
      },
      {
        label: 'Faculties',
        path: '/cms/faculties',
      },
      {
        label: 'Lecturers',
        path: '/cms/fecturers',
      },
      {
        label: 'Courses',
        path: '/cms/courses',
      },
      {
        label: 'Schemas',
        path: '/cms/schemas',
      },
      {
        label: 'Categorial News',
        path: '/cms/categorial-news',
      },
      {
        label: 'News',
        path: '/cms/news',
      },
    ],
  },
  {
    label: 'Penelitian',
    path: '',
    icon: ICResearch,
    iconActive: '',
    children: [],
  },
  {
    label: 'ABIMAS',
    path: '',
    icon: ICAbimas,
    iconActive: '',
    children: [],
  },
  {
    label: 'Publications',
    path: '',
    icon: ICPublications,
    iconActive: '',
    children: [],
  },
]
