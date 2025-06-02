import React from 'react'
import Layout from '@/components/Layout'

export default function nosotros() {
  return (
    <Layout title ="ABout Us" description="Learn more about us and our mission ">
        <div className='Container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>About Us</h1>
            <p className='mb-4'>
                We are team 
            </p>
            <p>Or mission </p>
        </div>
    </Layout>
  )
}
