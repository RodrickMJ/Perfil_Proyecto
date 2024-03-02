import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Nav } from './components/forms/Nav/Nav'

import './App.css'
import { DatesPerfil } from './components/forms/datesPerfil/DatesPerfil'

function App() {


  return (
    <>
      <Nav />
      <DatesPerfil/>
    </>
  )
}

export default App
