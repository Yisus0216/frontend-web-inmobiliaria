import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


export default function Layout({children, title, description}) {
  return (
    <>
    
    <Head>
        <title>{title || 'Default Title'}</title>
        <meta name="description" content={description || 'Default Description'} /> 
    </Head>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}
