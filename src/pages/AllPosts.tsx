import ArticleTable from '../components/ArticleTable'
import { Card } from 'antd'
import ArticleTabs from '../components/ArticleTabs'
import useFetch from '../hooks/useFetch'
import React, { useEffect, useState } from 'react'
import './AllPosts.css'
import TabsEnum from '../enum/tabs'

const AllPosts: React.FC = () => {
  const [tabsEnum, setTabsEnum] = useState<TabsEnum>(TabsEnum.PUBLISHED)

  const {
    data: dataArticles,
    fetchData: fetchGetArticles
  } = useFetch({
    url: '/article',
    method: 'get'
  })

  useEffect(() => {
    fetchGetArticles({
      params: {
        limit: 10,
        offset: 0
      }
    })
  }, [])

  const result = (dataArticles as any[] ?? []).filter((elem) => elem.status === tabsEnum)

  const onChange = (key: string): void => {
    setTabsEnum(key as TabsEnum)
  }

  return (
    <Card style={{ width: '90%', height: '90%' }}>
      <ArticleTabs onChange={onChange}/>
      <ArticleTable data={result ?? []}/>
    </Card>
  )
}

export default AllPosts
