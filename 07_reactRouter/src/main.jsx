import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Layout from './layout.jsx'
import Header from './coponents/Header/header'
import Footer from './coponents/Footer/footer'
import Home from './coponents/Home/home'
import About from './About/about.jsx'


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
