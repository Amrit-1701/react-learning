import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Hello, User</h1>
    </div>)
}

const anotherEl = (
  <a href="https://google.com" target="_blank" >Visit Google</a>
)
// gives error because anotherEl is not a valid react element, it is just an object. 
 //so we can use React.createElement to create a react element from the object.


const reactEl = React.createElement('a',
  { href: "https://google.com", target: "_blank" },
  "Visit Google"
)

// react.createElement(tag, object{}, direct name)


createRoot(document.getElementById('root')).render(

  <App/>
  // <MyApp/>
  // MyApp()
   anotherEl //object is passed to render 
  //reactEl

)
