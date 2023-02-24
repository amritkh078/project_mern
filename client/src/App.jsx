import React from 'react'
import {Navbar, Footer} from './components'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App