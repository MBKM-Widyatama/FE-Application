import { PublicLayout, MainLayout } from '@utama/layouts'
import { useRouter } from 'next/router'
import React from 'react'

export default function useLayout() {
  const router = useRouter()
  const isAuthPage = router.asPath.split('/')[1]
  if (isAuthPage === 'public') {
    return PublicLayout
  }
  if (isAuthPage === 'cms') {
    return MainLayout
  }

  return React.Fragment
}
