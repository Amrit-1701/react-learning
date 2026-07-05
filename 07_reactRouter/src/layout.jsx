import React from 'react'
import Header from './coponents/Header/header'
import Footer from './coponents/Footer/footer'
import Home from './coponents/Home/home'
import { Outlet } from 'react-router-dom'
// <Outlet /> is a component in React Router DOM that acts as a placeholder where the child routes are rendered.


function Layout() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Layout
