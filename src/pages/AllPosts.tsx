import ArticleTable from '../components/ArticleTable'
import { Card } from 'antd'
import ArticleTabs from '../components/ArticleTabs'
import useFetch from '../hooks/useFetch'
import React, { useEffect } from 'react'
import './AllPosts.css'

const AllPosts: React.FC = () => {
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

  const onChange = (key: string): void => {
    console.log(key)
  }

  return (
    <Card style={{ width: '90%', height: '90%' }}>
      <ArticleTabs onChange={onChange}/>
      <ArticleTable data={dataArticles ?? []}/>
    </Card>
  )
}

export default AllPosts
