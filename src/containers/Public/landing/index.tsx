import React from 'react'

// private components
import SectionHeader from './components/header'
import SectionFeature from './components/feature'
import SectionNews from './components/news'

export default function PageLanding() {
  return (
    <>
      <SectionHeader />
      <SectionFeature />
      <SectionNews />
    </>
  )
}
