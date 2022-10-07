import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import ContactMe from './Contact'
import Header from './Header'
import Services from './Services'

const Home = () => {
  return (
    <>
      <Header />
      <div className='z-10 relative'>
        <About />
        <Mission />
        <Services />
        <ContactMe />
      </div>
      <div className='z-10 relative'>
        <Footer />
      </div>
    </>
  )
}

export default Home
