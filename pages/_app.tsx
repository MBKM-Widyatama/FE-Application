import '@utama/styles/globals.css'
import type { AppProps } from 'next/app'
import { AntdProvider, ReactQueryProvider } from '@utama/providers'
import { MainLayout } from '@utama/layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <AntdProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AntdProvider>
    </ReactQueryProvider>
  )
}

export default MyApp
