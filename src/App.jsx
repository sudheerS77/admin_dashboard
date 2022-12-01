import React from 'react'
import { Routes, Route } from "react-router-dom"

//Pages
import HomePage from './pages/home.page'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:type" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App