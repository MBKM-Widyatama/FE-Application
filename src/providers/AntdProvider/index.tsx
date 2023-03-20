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
          colorPrimary: '#001D66',
          colorFillSecondary: '#D46B08',
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
