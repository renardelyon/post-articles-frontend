import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { Space, Table } from 'antd'

import React from 'react'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

function ArticleTable ({
  data
}: ArticleTableProps): JSX.Element {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
            <EditOutlined style={{ cursor: 'pointer' }}/>
            <DeleteOutlined style={{ cursor: 'pointer' }} />
          </Space>
      )
    }
  ]

  return (
      <>
        <Table columns={columns} dataSource={data} />
      </>
  )
}

interface ArticleTableProps {
  data?: DataType[]
}

export default ArticleTable
