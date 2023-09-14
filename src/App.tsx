import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import AddNew from './pages/AddNew'
import AllPosts from './pages/AllPosts'

function App (): JSX.Element {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<AllPosts/>} />
          <Route path='/add' element={<AddNew/>} />
          <Route path='/edit' element={<AddNew/>} />
          <Route path='/preview' element={<AllPosts/>} />
        </Routes>
      </Router>
  )
}

export default App
