import React from 'react'
import { Button, Form, Input, Card } from 'antd'
import './AllPosts.css'
import ArticleHeader from '../components/Header'
import useFetch from '../hooks/useFetch'
import TabsEnum from '../enum/tabs'

const { TextArea } = Input

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const AddNew: React.FC = () => {
  const [form] = Form.useForm()

  const {
    fetchData: fetchCreateArticles
  } = useFetch({
    url: '/article',
    method: 'post'
  })

  const onFinish = (values: any): void => {
    fetchCreateArticles({
      body: {
        ...values,
        status: TabsEnum.PUBLISHED
      }
    })
  }

  return (
   <ArticleHeader element={(
    <Card style={{ width: '90%', height: '90%' }}>
      <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      >
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
      </Form.Item>
      <Form.Item name="content" label="Content" rules={[{ required: true }]}>
          <TextArea rows={4} />
      </Form.Item>
      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
          <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
          Publish
          </Button>
          <Button htmlType="button">
          Draft
          </Button>
      </Form.Item>
      </Form>
  </Card>
   )}/>
  )
}

export default AddNew
