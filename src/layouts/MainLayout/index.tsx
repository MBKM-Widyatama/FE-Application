import React from 'react'
import { Layout, Menu, Typography, theme } from 'antd'
import Image from 'next/image'
import { ICBimaUtama } from '@utama/assets'
import { useMainStore } from '@utama/utils/stores/main'

const { Header, Sider, Content, Footer } = Layout

export default function MainLayout(props: React.PropsWithChildren) {
  const { children } = props
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const { menuItems } = useMainStore()

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken)
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type)
        // }}
        width={320}
        theme="light"
      >
        <div style={{ display: 'flex', alignItems: 'center', padding: 24 }}>
          <Image
            src={ICBimaUtama.src}
            alt="Logo Bima Utama"
            height={32}
            width={32}
          />
          <Typography.Title
            className="font-montserrat"
            style={{
              fontSize: 22,
              margin: 0,
              marginLeft: 10,
              fontWeight: 'bold',
            }}
          >
            SIMLITAMAS
          </Typography.Title>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
          style={{ height: '100%', overflow: 'scroll', padding: 20 }}
        />
      </Sider>
      <Layout style={{ background: '#fafafa' }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Powered By Widyatama</Footer>
      </Layout>
    </Layout>
  )
}
