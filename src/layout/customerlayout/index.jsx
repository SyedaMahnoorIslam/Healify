import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const CustomerLayout = ({ children }) => {
    return (
        <>
            <div><Navbar /></div>
            <div>{children}</div>
            <div><Footer /></div>
        </>
    )
}

export default CustomerLayout
