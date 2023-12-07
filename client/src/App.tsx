import './App.css'
import BaseLayout from './layout/base'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Login from './layout/auth'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<BaseLayout />}></Route>
            <Route path="login" element={<Login />}>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
