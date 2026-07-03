import React, { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass, setPass] = useState('')

  //const pass = useCallback(() => {function body} , [dependency])
  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass = str.charAt(char)



    }
    setPass(pass)


  }, [length, numAllow, charAllow, setPass])

  return (
    <>
      <h1 className="text-4xl text-center py-4 text-white">
        Password Generator</h1>
    </>
  )
}

export default App
