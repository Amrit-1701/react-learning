//custom hook

import { useEffect, useState } from 'react'
import {ImportBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo' 

import './App.css'

function App() {
  const [amt, setAmt] = useState(0)
  const [from,setFrom]= useState("usd")
  const [to,setTo]= useState("inr")
  const [convertedAmt,setConvertedAmt]= useState(0)

  return (
    <>
      <h1 className='text-3xl bg-orange-500 text-center'>currency converter</h1>
    </>
  )
}

export default App
