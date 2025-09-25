import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


export default function App() {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}
