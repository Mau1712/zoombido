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
                    <img src={logoZoombido} alt="zoombido logo" />
                    <p>VIDEO DRONE</p>
                </div>

                <div className='footerContentRedes'>
                    <a href="https://www.instagram.com/zoombido.vd?igsh=aGQ3NW1zeXE2aTZy" target='blank'>
                        <img src={instagramIcon} alt="instagram" />
                    </a>

                    <a href="https://www.tiktok.com/@zoombido.vd?_t=8objgZi9DBG&_r=1" target='blank'>
                        <img src={tiktokIcon} alt="tik tok" />
                    </a>

                    <a href="" target='blank'>
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