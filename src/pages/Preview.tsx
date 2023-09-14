import ArticleTable from '../components/ArticleTable'
import { Card } from 'antd'
import useFetch from '../hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AllPosts.css'
import TabsEnum from '../enum/tabs'
import ArticleHeader from '../components/Header'

const AllPosts: React.FC = () => {
  const [stateDataArticle, setStateDataArticle] = useState<any[]>([])
  const navigate = useNavigate()

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

  const onClick = (): void => {
    navigate('/edit')
  }

  const onDelete = (record: any) => () => {
    setStateDataArticle(stateDataArticle.map((elem) => {
      if (elem.title === record.title) {
        return {
          ...elem,
          status: TabsEnum.TRASH
        }
      }
      return elem
    }))
  }

  return (
    <ArticleHeader element={(
        <Card style={{ width: '90%', height: '90%' }}>
            <ArticleTable data={result ?? []} onClick={onClick} onDelete={onDelete}/>
        </Card>
    )}/>
  )
}

export default AllPosts
