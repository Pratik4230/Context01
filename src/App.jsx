import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './components/LogIn'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
       <h1>App.js</h1>
       <LogIn/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App
