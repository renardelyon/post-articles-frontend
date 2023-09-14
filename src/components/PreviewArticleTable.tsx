import { Table } from 'antd'

import React from 'react'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

function PreviewArticleTable ({
  data
}: PreviewArticleTableProps): JSX.Element {
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
      title: 'Content',
      dataIndex: 'content',
      key: 'content'
    }
  ]

  return (
        <>
          <Table columns={columns} dataSource={data} />
        </>
  )
}

interface PreviewArticleTableProps {
  data?: DataType[]
}

export default PreviewArticleTable
