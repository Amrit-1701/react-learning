import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Layout from './layout.jsx'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import About from './components/About/about.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'',
        element:<Home></Home>
      },
      {
        path:'about',
        element:<About></About>
      }
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode >
)
