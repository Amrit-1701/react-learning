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

const reactEl = React.createElement('a',
  { href: "https://google.com", target: "_blank" },
  "Visit Google"
)

// react.createElement(tag, object{}, direct name)


createRoot(document.getElementById('root')).render(

  <App/>
  // <MyApp/>
  // MyApp()
  // anotherEl //object is passed to render 
  //reactEl

)
