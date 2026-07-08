//store(have more in single store)-->reducers(obj)-->useSelector,useDispatch


import { useState } from 'react'
import Todos from './components/todos'
import AddTodo from './components/addTodo'
import './App.css'

function App() {
  

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
