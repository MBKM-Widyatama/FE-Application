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
  icon: string
  iconActive: string
  path?: string
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
    icon: ICResearch,
    iconActive: '',
    children: [
      {
        label: 'Users',
        path: '/cms/master-data/users',
      },
      {
        label: 'Faculties',
        path: '/cms/master-data/faculties',
      },
      {
        label: 'Lecturers',
        path: '/cms/master-data/lecturers',
      },
      {
        label: 'Courses',
        path: '/cms/master-data/courses',
      },
      {
        label: 'Schemas',
        path: '/cms/master-data/schemas',
      },
      {
        label: 'Categorial News',
        path: '/cms/master-data/news-category',
      },
      {
        label: 'News',
        path: '/cms/master-data/news',
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
