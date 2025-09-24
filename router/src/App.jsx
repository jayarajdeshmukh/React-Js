import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Home from './pages/Home';
import Header from './components/Header';

const App = () => {
  return (
    <div className='bg-black text-white'>
        <Header/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
