import React from 'react'

import logoZoombido from '../../assets/Images/logoZoombido.svg'


import "./TopNav.css"
import { Container } from 'react-bootstrap'

const TopNav = () => {
  return (
    <Container className='topNavContainer'>
       <img src={logoZoombido} alt="Logo Zoombido" />
       <p>VIDEO DRONE</p>
    </Container>
  )
}

export default TopNav