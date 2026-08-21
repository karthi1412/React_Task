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

function App() {

  return (
    <>
      <Basics />
      <Statetask />
      <UseEffect />
      <UseRef />
      <UseMemo />
      <MountingExample/>
      <UpdatingExample/>
    </>
  )
}

export default App
