import { create } from 'zustand'

const useArticleData = create((set, get) => ({
  data: {},
  setData: (data: any) => { set(data) }
}))

export default useArticleData
