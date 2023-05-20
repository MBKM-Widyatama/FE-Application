import { create } from 'zustand'
import React from 'react'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { MainStates } from './types/states'
import { MainActions } from './types/action'

export const useMainStore = create<MainStates & MainActions>()((set) => ({
  menuItems: [
    { key: '1', label: 'Dashboard', icon: React.createElement(UserOutlined) },
    {
      key: '2',
      label: 'Research',
      icon: React.createElement(VideoCameraOutlined),
      children: [],
    },
    {
      key: '3',
      label: 'ABIMAS',
      icon: React.createElement(UploadOutlined),
      children: [],
    },
    {
      key: '4',
      label: 'Publications',
      icon: React.createElement(UserOutlined),
      children: [],
    },
  ],
}))
