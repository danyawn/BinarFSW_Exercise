import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout