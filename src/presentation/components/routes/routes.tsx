import Login from '@/presentation/pages/login/login'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export default function Router (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path='/hello' element={<h1>Hello, World!</h1>}/>
        <Route path='*' element={<Navigate to={'/login'}/>} />
      </Routes>
    </BrowserRouter>
  )
}
