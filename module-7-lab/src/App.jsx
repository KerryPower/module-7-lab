import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greeting } from './components/Greeting/Greeting'
import BigCats from './components/Cats/BigCats'
import Emoji from './components/Emoji/EmojiChanger'
import Calculator from './components/Calculator/Calculator'
import BitcoinRates from './components/BitcoinRates/BitcoinRates'
import { MoodProvider } from './components/context/EmojiContext'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/Nav/NavBar'
import { UserProvider } from './components/context/UserContext'
import { Toolbar } from '@mui/material'


function App() {

  return (
      <UserProvider>
        <MoodProvider>
          <NavBar />
          <Toolbar />
          <AppRoutes />
        </MoodProvider>
      </UserProvider>
  );
}

export default App
