import React, { useState } from 'react'

import {Banner} from '../components/Banner/Banner'
import {Navbar} from '../components/Navbar/Navbar'
import {Clients} from '../components/Clients/Clients'
import {Services} from '../components/Services/Services'
import {Footer} from '../components/Footer/Footer'
import { Projects } from '../components/Projects/Projects'


const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      < Navbar toggle={toggle} />
      <Banner/>
      <Services />
      <Projects/>
      <Clients />
      <Footer />
    </>
  )
}

export default Home