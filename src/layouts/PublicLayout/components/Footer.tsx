import React from 'react'
import Image from 'next/image'

// antd components
import { Col, Row, Typography } from 'antd'

// assets
import { ICBimaUtama } from '@utama/assets/icons'
import { ILLandingBgBottom } from '@utama/assets/ilustrations'

export default function Footer() {
  const { Title, Text, Paragraph } = Typography

  return (
    <>
      <Row
        align="top"
        gutter={[30, 0]}
        style={{
          padding: '50px 100px',
          paddingBottom: 215,
          borderTop: '1px solid #EAEAEA',
        }}
      >
        <Col span={10}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
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
          </div>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', margin: '50px 0' }}
          >
            Keeping a journal is the best way to record your travels in an
            ever-changing and evolving world. Discovering fresh knowledge is an
            endless adventure. Keep exploring the world with our journal app.
          </Paragraph>
          <Paragraph style={{ fontSize: 16, color: '#AAAAAA' }}>
            Universitas Widyatama <br />
            Jl. Cikutra no 204 A Bandung <br />
            Jawa Barat, Indonesia 40124 <br />
          </Paragraph>
        </Col>
        <Col span={2}></Col>
        <Col span={4}>
          <Title
            level={5}
            style={{ margin: 0, marginBottom: 50, fontWeight: 600 }}
          >
            Menu
          </Title>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Guide
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            About BIMAUTAMA
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Announcements
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            News
          </Paragraph>
        </Col>
        <Col span={4}>
          <Title
            level={5}
            style={{ margin: 0, marginBottom: 50, fontWeight: 600 }}
          >
            Digital Services
          </Title>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Blog
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Email
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Student Portal
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Repository
          </Paragraph>
        </Col>
        <Col span={4}>
          <Title
            level={5}
            style={{ margin: 0, marginBottom: 50, fontWeight: 600 }}
          >
            Other Links
          </Title>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Academic
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Career Center
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Staffing
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Library
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, color: '#AAAAAA', marginBottom: 16 }}
          >
            Lecturer Portal
          </Paragraph>
        </Col>
      </Row>
      <div style={{ position: 'absolute', left: 0, bottom: 0 }}>
        <Image
          src={ILLandingBgBottom}
          alt="Illustration landing bg bottom"
          width={521}
        ></Image>
      </div>
    </>
  )
}
