import React, { useEffect, useState, useCallback } from 'react'

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

      pass += str.charAt(char)

    }
    setPass(pass)

  }, [length, numAllow, charAllow, setPass])


  useEffect(() => {
    passGenerator()
  }, [length, numAllow, charAllow, passGenerator])

  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 ">
        <h1 className="text-white text-center my-3 ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            placeholder="Your Password"
            readOnly
            className="outline-none w-full py-1 px-3"
          />
          <br></br>
          <button className="bg-pink-500 text-black rounded px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex item-center gap-x-1'>
            <input
              type='range'
              min="6"
              max="50"
              value={length}
              className='cursor-pointer '
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numAllow}
              id="numInput"
              onChange={() => {
                setNumAllow((prev) => !prev)
              }}
            />
            <label htmlFor='numInput'>Numbers</label>

          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>

      </div >
    </>
  )
}

export default App
