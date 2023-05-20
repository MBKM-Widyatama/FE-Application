import React from 'react'
import Image from 'next/image'

import { PublicLayout } from '@utama/layouts/'

// assets
import { ILSampleArticleCover } from '@utama/assets/ilustrations'

// antd components
import { Col, Row, Typography } from 'antd'

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

  return (
    <PublicLayout>
      <Row
        align="top"
        gutter={[0, 40]}
        style={{ padding: 100, paddingTop: 60 }}
      >
        <Col span={24} style={{ display: 'flex' }}>
          <Text style={{ fontWeight: 600, fontSize: 16 }}>BIMAUTAMA</Text>
          <Text style={{ margin: '0 12px', fontWeight: 600 }}>{'>'}</Text>
          <Text style={{ color: '#AAAAAA', fontSize: 16 }}>News</Text>
        </Col>

        <Col span={16}>
          {[1, 2, 3].map((item: any) => (
            <Row gutter={[0, 0]} key={item} style={{ marginBottom: 50 }}>
              <Col span={15}>
                <Title
                  level={3}
                  style={{ margin: 0, marginBottom: 20, fontWeight: 600 }}
                >
                  Pengumuman Peserta FGA - Bootcamp Batch 1 Tahun 2023
                </Title>
                <Paragraph style={{ color: '#757575', fontWeight: 300 }}>
                  Hello BIMAUTAMAS! Selamat! Bagi Anda yang terpilih sebagai
                  Peserta Bootcamp Fresh Graduate Academy Digital Talent
                  Scholarship Batch 1 Tahun 2023 (FGA DTS), program ...
                </Paragraph>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Paragraph
                    style={{ color: '#757575', fontWeight: 300, margin: 0 }}
                  >
                    16 March 2023
                  </Paragraph>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 100,
                      backgroundColor: '#D9D9D9',
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  ></div>
                  <div
                    style={{
                      background: '#F2F2F2',
                      borderRadius: 16,
                      padding: '8px 12px',
                      fontSize: 12,
                    }}
                  >
                    Relationships
                  </div>
                </div>
              </Col>
              <Col span={9}>
                <Image
                  src={ILSampleArticleCover}
                  alt="sample"
                  fill
                  style={{ borderRadius: 4, paddingLeft: 34 }}
                ></Image>
              </Col>
            </Row>
          ))}
        </Col>
        <Col span={8} style={{ paddingLeft: 58 }}>
          <Paragraph
            style={{ fontWeight: 600, fontSize: 16, marginBottom: 30 }}
          >
            Discover more of what matters to you
          </Paragraph>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {sampleLabels.map((item: any) => (
              <div
                style={{
                  background: '#F2F2F2',
                  borderRadius: 16,
                  padding: '8px 12px',
                  fontSize: 12,
                  marginRight: 8,
                  marginBottom: 12,
                }}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </PublicLayout>
  )
}
