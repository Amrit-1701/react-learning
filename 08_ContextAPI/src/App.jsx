import { useState } from 'react'
import Login from './components/login'
import Profile from './components/profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Context API</h1>
     <Login></Login>
     <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
