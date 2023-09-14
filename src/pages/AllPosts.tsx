import TestTable from './TestTable'
import type { TabsProps } from 'antd'
import { Tabs, Card } from 'antd'
import React from 'react'
import './AllPosts.css'

const AllPosts: React.FC = () => {
  const onChange = (key: string): void => {
    console.log(key)
  }

  const itemTabs: TabsProps['items'] = [
    {
      key: '1',
      label: 'Published'
    },
    {
      key: '2',
      label: 'Drafts'
    },
    {
      key: '3',
      label: 'Trashed'
    }
  ]

  return (
    <Card style={{ width: '90%', height: '90%' }}>
      <Tabs defaultActiveKey="1" items={itemTabs} onChange={onChange} />
      <TestTable />
    </Card>
  )
}

export default AllPosts
