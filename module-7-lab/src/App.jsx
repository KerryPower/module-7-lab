import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greeting } from './components/Greeting/Greeting'
import BigCats from './components/Cats/BigCats'
import Emoji from './components/Emoji/EmojiChanger'
import Calculator from './components/Calculator/Calculator'
import BitcoinRates from './components/BitcoinRates'

function App() {

  return (
    <>
    <BitcoinRates />
    </>
  )
}

export default App
