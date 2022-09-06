/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'
import CtaSection from '../components/sections/CtaSection'
import MainSection from '../components/sections/MainSection'
import ServicesSection from '../components/sections/ServicesSection'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <MainSection />
      <AboutSection />
      <ServicesSection />
      <CtaSection />
      <ContactSection />

      <Footer />
    </>
  )
}

export default Home
