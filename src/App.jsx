import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Statetask from './Components/Statetask'
import Basics from './Components/Basics'
import UseEffect from './Components/UseEffect'
import UseRef from './Components/UseRef'
import UseMemo from './Components/UseMemo'
import MountingExample from './Components/MountingExample'
import UpdatingExample from './Components/UpdatingExample'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
