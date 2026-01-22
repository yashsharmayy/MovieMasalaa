import { useState } from 'react'
import MovieCard from './component/MovieCard'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import FavSec from './pages/Fav'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<FavSec></FavSec>} />
        </Routes>

      </div>
    </>
  )
}

export default App
