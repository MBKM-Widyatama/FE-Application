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
  const { Title, Text, Paragraph } = Typography

  const sampleLabels = [
    'Self Improvement',
    'Writing',
    'Productivity',
    'Relationships',
    'Politics',
    'Education',
  ]

  const features = [
    {
      icon: ICBrieftCase,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
    {
      icon: ICTrello,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
    {
      icon: ICSend2,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
    {
      icon: ICGift,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
    {
      icon: ICWifiOff,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
    {
      icon: ICGlobe,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
  ]

  return (
    <PublicLayout>
      <SectionHeader />
      <SectionFeature />
      <SectionNews />
    </PublicLayout>
  )
}
