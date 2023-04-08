import React from 'react'
import Image from 'next/image'

// antd components
import { Button, Col, Row, Typography } from 'antd'

// assets
import { ICBimaUtama } from '@utama/assets/icons'

export default function Header() {
  const { Title } = Typography

  return (
    <Row align="middle" style={{ padding: '50px 100px' }}>
      <Col flex={1} style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={ICBimaUtama}
          alt="Icon Bima Utama"
          width={28}
          height={28}
        ></Image>
        <Title
          level={3}
          className="font-montserrat"
          style={{ margin: 0, marginLeft: 10, fontWeight: 'bold' }}
        >
          BIMAUTAMA
        </Title>
      </Col>
      <Col style={{ display: 'flex', alignItems: 'center' }}>
        <Title level={5} style={{ margin: 0, marginRight: 12 }}>
          Don’t have an account?
        </Title>
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
          Sign Up
        </Button>
      </Col>
    </Row>
  )
}
