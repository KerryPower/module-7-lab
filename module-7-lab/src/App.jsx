import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greeting } from './components/Greeting/Greeting'
import BigCats from './components/Cats/BigCats'
import Emoji from './components/Emoji/EmojiChanger'
import Calculator from './components/Calculator/Calculator'
import BitcoinRates from './components/BitcoinRates/BitcoinRates'
import { MoodProvider } from './components/Emoji/context/EmojiContext'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'


function App() {

  return (
    <MoodProvider>
      <NavBar />
      <AppRoutes />
    </MoodProvider>
  )
}

export default App
