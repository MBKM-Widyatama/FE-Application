import React from 'react'
import Image from 'next/image'

import { PublicLayout } from '@utama/layouts/'

// assets
import {
  ILLandingBgHeader,
  ILSampleArticleCover,
} from '@utama/assets/ilustrations'

// antd components
import { Col, Row, Typography, Button } from 'antd'
import {
  ICBrieftCase,
  ICGift,
  ICGlobe,
  ICSend2,
  ICTrello,
  ICWifiOff,
} from '@utama/assets'

// private components
import SectionHeader from './components/header'
import SectionFeature from './components/feature'
import SectionNews from './components/news'

export default function PageSignIn() {
  return (
    <PublicLayout>
      <SectionHeader />
      <SectionFeature />
      <SectionNews />
    </PublicLayout>
  )
}
