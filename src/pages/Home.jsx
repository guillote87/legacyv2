import React from 'react'

import {Banner} from '../components/Banner/Banner'
import {Clients} from '../components/Clients/Clients'
import {Services} from '../components/Services/Services'
import {Footer} from '../components/Footer/Footer'

import ContactForm from '../components/ContactSection/ContactForm'


const Home = () => {

  return (
    <>
      <Banner/>
      <Services />
      <Clients />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Home