import { create } from 'zustand'
import React from 'react'
import AddToQueueIcon from '@mui/icons-material/AddToQueue'
import { MainActions } from './types/action'

export const useMainStore = create<any & MainActions>()((set) => ({
  menuItems: [
    { label: 'Dashboard', icon: React.createElement(AddToQueueIcon) },
    {
      label: 'Research',
      icon: React.createElement(AddToQueueIcon),
      children: [],
    },
    {
      label: 'ABIMAS',
      icon: React.createElement(AddToQueueIcon),
      children: [],
    },
    {
      label: 'Publications',
      icon: React.createElement(AddToQueueIcon),
      children: [],
    },
  ],
}))
