import React from 'react'
import Contact from '../../components/contact/Contact'
import Agency from './components/agency/Agency'
import Intro from './components/intro/Intro'
import Pub from './components/pub/Pub'
import Team from './components/team/Team'

const Agence = () => {
  return (
    <div>
      <Intro />
      <Team />
      <Pub />
      <Agency/>
      <Contact />
    </div>
  )
}

export default Agence