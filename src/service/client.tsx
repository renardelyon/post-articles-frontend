/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

export default instance
