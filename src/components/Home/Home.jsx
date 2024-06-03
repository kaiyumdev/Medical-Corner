import React from 'react'
import HeroSection from '../../pages/HeroSection'
import About from '../../pages/About'
import Faq from '../../pages/Faq'
import Helpline from '../../pages/HelpLine'
import Services from './Services/Services'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const services = useLoaderData()
  return (
    <div>
        <HeroSection></HeroSection>
        <About></About>
        <Services services={services}></Services>
        <Faq></Faq>
        <Helpline></Helpline>
    </div>
  )
}

export default Home