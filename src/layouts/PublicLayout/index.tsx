import React from 'react'

// custom components
import Header from './components/Header'
import Footer from './components/Footer'

export default function PublicLayout(props: React.PropsWithChildren) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100vw',
          maxWidth: 1366,
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  )
}
