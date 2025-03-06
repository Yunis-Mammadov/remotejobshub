import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const MainRoot = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default MainRoot
