//tiny mc
//appwrite

import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import authService from './appwrite/authService'
import './App.css'
import { login, logout } from './store/authSlice'
import { Header } from './components/index'
import { Footer } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }))
      } else {
        dispatch(logout())
      }
    }).finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-sc flex flex-wrap bg-gray-400'><div className='w-full block'>
      <Header />
      <main>
        ToDo:  {/*  <Outlet /> */}
      </main>
      <Footer></Footer>
    </div>
    </div>
  ) : (null)
}

export default App
