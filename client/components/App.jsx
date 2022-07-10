import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Training } from './Training'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Training />} />
    </Routes>
  )
}

export default App
