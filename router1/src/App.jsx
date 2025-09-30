import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './pages/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path='/About' element={<About/>}/>
         <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
