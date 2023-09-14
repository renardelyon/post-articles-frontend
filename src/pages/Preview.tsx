import { Card } from 'antd'
import useFetch from '../hooks/useFetch'
import React, { useEffect, useState } from 'react'
import './AllPosts.css'
import TabsEnum from '../enum/tabs'
import ArticleHeader from '../components/Header'
import PreviewArticleTable from '../components/PreviewArticleTable'

const Preview: React.FC = () => {
  const [stateDataArticle, setStateDataArticle] = useState<any[]>([])

  const {
    data: dataArticles,
    fetchData: fetchGetArticles
  } = useFetch({
    url: '/article',
    method: 'get'
  })

  useEffect(() => {
    setStateDataArticle(dataArticles ?? [])
  }, [dataArticles])

  useEffect(() => {
    fetchGetArticles({
      params: {
        limit: 10,
        offset: 0
      }
    })
  }, [])

  const result = (stateDataArticle).filter((elem) => elem.status === TabsEnum.PUBLISHED)
  return (
    <ArticleHeader element={(
        <Card style={{ width: '90%', height: '90%' }}>
            <PreviewArticleTable data={result ?? []}/>
        </Card>
    )}/>
  )
}

export default Preview
