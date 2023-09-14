import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import React from 'react'
import TabsEnum from '../enum/tabs'

function ArticleTabs ({
  onChange
}: ArticleTabsProps): JSX.Element {
  const itemTabs: TabsProps['items'] = [
    {
      key: TabsEnum.PUBLISHED,
      label: 'Published'
    },
    {
      key: TabsEnum.DRAFTS,
      label: 'Drafts'
    },
    {
      key: TabsEnum.TRASH,
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
