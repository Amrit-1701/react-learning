import React,{ useState } from 'react' //useState is a hook which is used to manage the state of the component
import './App.css'

//react control the UI updation so to change the updated value in UI 
// we need to use hooks instead of using querySelector or getElementById.... 

function App() {
  
  //let Counter = 25
  let [Counter, setCounter] = useState(15) //always use let

const addval=()=>{
 
  Counter += 1;
  setCounter(Counter)
  console.log(`Counter Val: ${Counter}`)
 // document.querySelector('h2').textContent = `Counter val: ${Counter}`
}

const resetVal=()=>{
  if(Counter>0)
  setCounter(Counter-1)
 // setCounter(0)
}


  return (
    <>
    <h1>React Classes</h1>
    <h2>Counter val: {Counter}</h2>

    <button id="add" onClick={addval}>Add value</button>
    
    <hr></hr>
    <button id="reset" onClick={resetVal}>Reset value {Counter} </button>
    <br></br>
    <footer>
      footer {Counter}
    </footer>

    </>
  )
}


export default App
