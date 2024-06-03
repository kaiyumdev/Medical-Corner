import React from 'react'
import HeroSection from '../../pages/HeroSection'
import About from '../../pages/About'
import Faq from '../../pages/Faq'
import Helpline from '../../pages/HelpLine'

const Home = () => {
  return (
    <div>
        <HeroSection></HeroSection>
        <About></About>
        <Faq></Faq>
        <Helpline></Helpline>
    </div>
  )
}

export default Home