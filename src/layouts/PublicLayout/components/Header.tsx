import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

// antd components
import { Button, Col, Row, Typography } from 'antd'

// assets
import { ICBimaUtama } from '@utama/assets/icons'

export default function Header() {
  const router = useRouter()

  const { Title } = Typography

  return (
    <Row
      align="middle"
      justify="space-between"
      style={{ padding: '50px 100px' }}
    >
      <Col style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={ICBimaUtama}
          alt="Icon Bima Utama"
          width={28}
          height={28}
        ></Image>
        <Title
          level={3}
          className="font-montserrat"
          style={{ marginLeft: 10, fontWeight: 'bold' }}
          onClick={() => router.push('/landing')}
        >
          BIMAUTAMA
        </Title>
      </Col>
      <Col style={{ display: 'flex', alignItems: 'center' }}>
        <Title
          level={5}
          style={{ marginRight: 40, fontWeight: 600 }}
          onClick={() => router.push('')}
        >
          Guide
        </Title>
        <Title
          level={5}
          style={{ marginRight: 40, fontWeight: 600 }}
          onClick={() => router.push('')}
        >
          About BIMAUTAMA
        </Title>
        <Title
          level={5}
          style={{ marginRight: 40, fontWeight: 600 }}
          onClick={() => router.push('')}
        >
          Annoucements
        </Title>
        <Title
          level={5}
          style={{ fontWeight: 600 }}
          onClick={() => router.push('/news')}
        >
          News
        </Title>
      </Col>
      <Col>
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
          Sign In
        </Button>
      </Col>
    </Row>
  )
}
