import {
  BookOutlined,
  FileAddOutlined,
  EyeOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, Typography } from 'antd'
import React from 'react'
import AllPosts from './pages/AllPosts'

const { Title } = Typography

const { Header, Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]
function getItem (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } satisfies MenuItem
}

const items: MenuItem[] = [
  getItem('All Posts', '1', <BookOutlined />),
  getItem('Add New', '2', <FileAddOutlined />),
  getItem('Preview', '3', <EyeOutlined />)
]

function App (): JSX.Element {
  console.log(process.env.REACT_APP_API_URL)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
          <Title level={3} style={{ padding: '0px 0px 10px 10px' }}>
            ALL POSTS
          </Title>
        </Header>
        <Content className='card-container'>
         <AllPosts/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
