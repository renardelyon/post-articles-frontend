/* eslint-disable arrow-body-style */
// eslint-disable-next-line max-len
import { useState } from 'react'
import { type Method } from 'axios'
import client from '../service/client'

interface UseFetchProps {
  url: string
  method: Method
}

interface TFetchData {
  body?: object
  params?: object
}

const useFetch = ({
  url,
  method = 'get'
}: UseFetchProps): any => {
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>()
  const [data, setData] = useState<any>()

  const fetchData = async ({ body, params }: TFetchData): Promise<void> => {
    try {
      setError('')
      setLoading(true)

      const res = await client({
        url: `${process.env.REACT_APP_API_URL}${url}`,
        method,
        data: body ?? {},
        headers: {
          'Content-Type': 'application/json'
        },
        params: params ?? {},
        withCredentials: false
      })

      setData(res.data)
      setLoading(false)
    } catch (err: any) {
      setError(err.response.data.message)
      setLoading(false)
    }
  }

  return {
    data,
    loading,
    error,
    fetchData
  }
}

export default useFetch
