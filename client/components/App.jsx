import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Training } from './Training'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Training />} />
      </Routes>
    </ChakraProvider>
  )
}

export default App
