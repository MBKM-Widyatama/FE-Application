import { useExampleStorage } from '@utama/utils/storages/example'
import { ConfigProvider, theme } from 'antd'
import React from 'react'

export default function AntdProvider({ children }: React.PropsWithChildren) {
  const { isDarkMode } = useExampleStorage()

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#0084F4',
          colorFillSecondary: '#4046FD',
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
