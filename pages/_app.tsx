import '@utama/styles/globals.css'
import type { AppProps } from 'next/app'
import { MaterialUiProvider, ReactQueryProvider } from '@utama/providers'
import React from 'react'
import { useLayout } from '@utama/utils/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = useLayout()

  return (
    <ReactQueryProvider>
      <MaterialUiProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MaterialUiProvider>
    </ReactQueryProvider>
  )
}

export default MyApp
