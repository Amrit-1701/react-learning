import { useState } from 'react'
import Header from './coponents/Header/header'
import Footer from './coponents/Footer/footer'
import Home from './coponents/Home/home'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    {/* <Header></Header> */}
    <Footer></Footer>
    <Home></Home>
    
    </>
  
)}

export default App
