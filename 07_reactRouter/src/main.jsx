import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route,RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import Layout from './layout.jsx'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import Github , {githubLoader} from './components/Github/git.jsx'

import './index.css'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout></Layout>,
//     children:[
//       {
//         path:'',
//         element:<Home></Home>
//       },
//       {
//         path:'about',
//         element:<About></About>
//       },
//       {
//         path:'contact',
//         element:<Contact></Contact>

//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route 
       loader = {githubLoader}
      path='github' element={<Github />} />
    </Route>

  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode >
)
