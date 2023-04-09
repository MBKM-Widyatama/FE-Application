import { MainLayout } from '@utama/layouts'
import { useRouter } from 'next/router'
import React from 'react'

export default function useLayout() {
  const router = useRouter()
  const isAuthPage = router.asPath.split('/')[1] === 'auth'
  if (isAuthPage) {
    return React.Fragment
  }
  return MainLayout
}
