/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutSection from '../components/sections/AboutSection'
import MainSection from '../components/sections/MainSection'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <MainSection />
      <AboutSection />

      <Footer />
    </>
  )
}

export default Home
