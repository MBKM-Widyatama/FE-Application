import '@utama/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  MaterialUiProvider,
  ReactQueryProvider,
  ContextApiProvider,
} from '@utama/providers'
import React from 'react'
import { useLayout } from '@utama/utils/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = useLayout()

  return (
    <ContextApiProvider>
      <ReactQueryProvider>
        <MaterialUiProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MaterialUiProvider>
      </ReactQueryProvider>
    </ContextApiProvider>
  )
}

export default MyApp
