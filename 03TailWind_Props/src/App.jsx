import { useState } from 'react'

import  './App.css'
import Card from './components/card'

//props is a way to pass data from parent component to child component.
//  It is a way to make components reusable and dynamic. Props are read-only, 
// which means that they cannot be modified by the child component.

function App(props) {
  console.log('props',props)

  return (
    <>
     <h1 className='bg-red-500 text-white p-4 rounded-xl'>Tailwind Test</h1>
     <Card channel="John Doe" /> {/* the value I write in this will show in props */}
    <Card />
    </>
  )
}

export default App