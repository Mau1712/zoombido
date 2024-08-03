import React from 'react'
import { Container } from 'react-bootstrap'

import logoZoombido from "../../assets/Images/logoZoombido.svg"
import instagramIcon from "../../assets/Images/redes/instagram.png"
import tiktokIcon from "../../assets/Images/redes/tiktok.png"
import wpIcon from "../../assets/Images/redes/whatsApp.png"

import "./Footer.css"

const Footer = () => {
    return (
        <Container className='footerContainer'>
            <div className='footerContent'>
                <div className='footerContentLogo'>
                    <img src={logoZoombido} alt="" />
                    <p>VIDEO DRON</p>
                </div>

                <div className='footerContentRedes'>
                    <a href="">
                        <img src={instagramIcon} alt="instagram" />
                    </a>

                    <a href="">
                        <img src={tiktokIcon} alt="tik tok" />
                    </a>

                    <a href="">
                        <img src={wpIcon} alt="whatsapp" />
                    </a>
                </div>
            </div>

            <div className='footerNavContainer'>
                <div className='footerNavContent'>
                    <a href="">ZOOMBING EXPERIENCE</a>
                    <a href="">SERVICIOS</a>
                    <a href="">PORTAFOLIO</a>
                    <a href="">ABOUT</a>
                    <a href="">EQUIPOS</a>
                    <a href="">CONTACTO</a>
                </div>
            </div>

            <div className='tycFooter'>
                <div>
                    <a style={{ paddingLeft: "0px" }} href="">Política de Privacidad</a>
                    <a href="">Términos y Condiciones</a>
                    <a style={{ border: "none" }} href="">© 2024 Zoombido Inc.</a>
                </div>

                <div className='developer'>
                    <span>Developed by </span> <a href="">Maurizio Abatantuono</a>
                </div>
            </div>
        </Container>
    )
}

export default Footer