import React from 'react'
import Image from 'next/image'

// assets
import { ILLoginBgBottom } from '@utama/assets/ilustrations'

// antd components
import { Button, Col, Row, Typography, Card, Form, Input } from 'antd'

// custom components
import Header from './components/Header'

export default function PageSignIn() {
  const { Title, Text } = Typography
  const [form] = Form.useForm()

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Header />

      <div style={{ position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 2,
            left: 0,
            right: 0,
            marginTop: 114,
          }}
        >
          <Card
            bordered={false}
            style={{
              padding: '16px 56px',
              borderRadius: 20,
              boxShadow: '0px 15px 38px rgba(0, 0, 0, 0.11)',
            }}
          >
            <Title
              level={2}
              style={{ margin: 0, textAlign: 'center', marginBottom: 24 }}
            >
              Welcome back!
            </Title>

            <Form form={form} layout="vertical" autoComplete="off">
              <Row gutter={[0, 24]} style={{ maxWidth: 407 }}>
                <Col span={24}>
                  <Form.Item
                    name="email"
                    label={<Text style={{ fontSize: '12px' }}>Email</Text>}
                    rules={[{ required: true }, { type: 'email' }]}
                    style={{ margin: 0 }}
                  >
                    <Input
                      placeholder="Type here anything"
                      style={{ height: 50 }}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="password"
                    label={<Text style={{ fontSize: '12px' }}>Password</Text>}
                    rules={[{ required: true }]}
                    style={{ margin: 0 }}
                  >
                    <Input.Password
                      placeholder="Type here anything"
                      style={{ height: 50 }}
                    />
                  </Form.Item>
                </Col>
                <Col span={24} style={{ textAlign: 'end' }}>
                  <Text style={{ fontSize: '12px', color: '#4046FD' }}>
                    Forgot Password?
                  </Text>
                </Col>
                <Col span={24}>
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{
                      fontWeight: 500,
                      background:
                        'linear-gradient(89.11deg, #2C5BF7 1.73%, #40B4FD 98.05%)',
                      boxShadow: 'none',
                      border: 0,
                      width: '100%',
                      height: 56,
                    }}
                  >
                    Sign In & Start Managing
                  </Button>
                </Col>
                <Col span={24} style={{ textAlign: 'center' }}>
                  <Text
                    style={{
                      fontSize: '12px',
                      color: '#4046FD',
                      fontWeight: 300,
                    }}
                  >
                    or Sign In with Google
                  </Text>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>

        <div className="next-image-container" style={{ paddingTop: 360 }}>
          <Image
            src={ILLoginBgBottom}
            alt="Illustration login bg bottom"
            fill
            className="image"
          ></Image>
        </div>
      </div>
    </div>
  )
}
