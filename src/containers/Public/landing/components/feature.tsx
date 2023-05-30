import React from 'react'
import Image from 'next/image'

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
    <div style={{ width: '100%', textAlign: 'center', marginBottom: 140 }}>
      <div style={{ marginBottom: 60 }}>
        <Text
          className="text-gradient"
          style={{ fontWeight: 600, fontSize: 16 }}
        >
          Work Better
        </Text>
        <Title
          style={{ fontSize: 36, fontWeight: 700, margin: '5px 0 20px 0' }}
        >
          For Your Future
        </Title>
        <Text style={{ fontSize: 16, color: '#575455' }}>
          Let&apos;s discover new knowledge and new friends and have a learning
          <br />
          experience with beautiful teachers
        </Text>
      </div>
      <Row
        // align="top"
        gutter={[120, 60]}
        style={{ padding: '0 150px' }}
      >
        {features.map(
          (item: { icon: any; title: string; desc: string }, index: number) => (
            <Col
              span={8}
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'start',
              }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                style={{ marginRight: 24 }}
              ></Image>
              <div style={{ textAlign: 'left' }}>
                <Title
                  level={5}
                  style={{ margin: 0, marginBottom: 8, fontSize: 20 }}
                >
                  {item.title}
                </Title>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#575455',
                  }}
                >
                  {item.desc}
                </Text>
              </div>
            </Col>
          ),
        )}
      </Row>
    </div>
  )
}
