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
  data,
  onClick,
  onDelete
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
      render: (_, record) => {
        return (<Space size="middle">
            <EditOutlined style={{ cursor: 'pointer' }} onClick={onClick} />
            <DeleteOutlined style={{ cursor: 'pointer' }} onClick={onDelete(record)}/>
          </Space>)
      }
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
  onClick?: () => void
  onDelete: (val: any) => () => void
}

ArticleTable.DefaultProps = {
  onDelete: (val: any) => () => {}
}

export default ArticleTable
