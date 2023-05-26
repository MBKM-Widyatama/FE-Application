import React from 'react'
import Image from 'next/image'

// assets
import { ILLandingBgHeader } from '@utama/assets/ilustrations'

// antd components
import { Typography, Button } from 'antd'

export default function PageSignIn() {
  const { Title, Text } = Typography

  return (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        marginBottom: 140,
      }}
    >
      <Image src={ILLandingBgHeader} alt="bg-header" fill></Image>
      <Title
        style={{
          fontWeight: 700,
          fontSize: 48,
          marginBottom: 20,
          paddingTop: 92,
        }}
        className="font-heading-pro-wide"
      >
        Let’s upload your
        <span className="text-gradient font-heading-pro-wide"> journal</span>,
        <br /> and start
        <span className="text-gradient font-heading-pro-wide">
          {' '}
          contributing
        </span>
        <br /> to the
        <span className="text-gradient font-heading-pro-wide"> world</span>
      </Title>
      <Text
        style={{
          display: 'block',
          fontSize: 20,
          color: '#AAAAAA',
          marginBottom: 60,
        }}
      >
        Let&apos;s discover new knowledge and new friends and have a learning
        <br />
        experience with beautiful teachers
      </Text>

      <Button
        type="primary"
        shape="round"
        size="large"
        style={{
          fontSize: 14,
          fontWeight: 500,
          background:
            'linear-gradient(89.11deg, #2C5BF7 1.73%, #40B4FD 98.05%)',
          boxShadow: 'none',
          border: 0,
          padding: '0 28px',
          height: 46,
        }}
      >
        Get Started
      </Button>
    </div>
  )
}
