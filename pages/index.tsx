/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'
import CtaSection from '../components/sections/CtaSection'
import FaqSection from '../components/sections/FaqSection'
import MainSection from '../components/sections/MainSection'
import PricingSection from '../components/sections/PricingSection'
import ServicesSection from '../components/sections/ServicesSection'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <MainSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <CtaSection />
      <FaqSection />
      <ContactSection />

      <Footer />
    </>
  )
}

export default Home
