import '@utama/styles/globals.css'
import type { AppProps } from 'next/app'
import { AntdProvider, ReactQueryProvider } from '@utama/providers'
import React from 'react'
import { useLayout } from '@utama/utils/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = useLayout()

  return (
    <ReactQueryProvider>
      <AntdProvider>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </AntdProvider>
    </ReactQueryProvider>
  )
}

export default MyApp
