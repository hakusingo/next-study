import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
        <main className='h-[calc(100vh-120px)] bg-sky-100'>
          {children}
        </main>
      <Footer/>
    </>
  )
}

export default Layout
