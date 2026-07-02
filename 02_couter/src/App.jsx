import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let Counter = 25

const addval=()=>{
  console.log(`Value Added: ${Math.random()}`);
  

}

  return (
    <>
    <h1>React Classes</h1>
    <h2>Counter val: {Counter}</h2>

    <button id="add" onClick={addval}>Add value</button>
    <br></br>
    <hr></hr>
    <button id="dec">Decrease value</button>
    </>
  )
}


export default App
