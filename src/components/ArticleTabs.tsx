import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import React from 'react'

function ArticleTabs ({
  onChange
}: ArticleTabsProps): JSX.Element {
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
      <>
        <Tabs defaultActiveKey="1" items={itemTabs} onChange={onChange} />
      </>
  )
}

interface ArticleTabsProps {
  onChange?: (activeKey: string) => void
}

export default ArticleTabs
