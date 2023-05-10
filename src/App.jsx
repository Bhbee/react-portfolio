import React from 'react'
import About from './components/about/About'
import Contact from './components/contacts/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        {/* <Portfolio /> */}
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App