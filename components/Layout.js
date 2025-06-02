import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


export default function Layout(children, title, description) {
  return (
    <>
    
    <Head>
        <tittle>{title || 'Default Title'}</tittle>
        <meta> name="description" content={description || 'Default Description'}</meta>
    </Head>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}
