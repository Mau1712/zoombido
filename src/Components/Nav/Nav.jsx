import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import "./Nav.css";

const Nav = () => {
    const [activeLink, setActiveLink] = useState('');
  

    const handleClick = (link) => {
        setActiveLink(link);
    };

  

    return (
        <Container 
            className='navContainer'
        >
            <div>
                <a href="#experience"
                    className={activeLink === 'experience' ? 'active' : ''}
                    onClick={() => handleClick('experience')}>
                    ZOOMBING EXPERIENCE
                </a>
                <a href="#services"
                    className={activeLink === 'services' ? 'active' : ''}
                    onClick={() => handleClick('services')}>
                    SERVICIOS
                </a>
                <a href="#portfolio"
                    className={activeLink === 'portfolio' ? 'active' : ''}
                    onClick={() => handleClick('portfolio')}>
                    PORTAFOLIO
                </a>
                <a href="#about"
                    className={activeLink === 'about' ? 'active' : ''}
                    onClick={() => handleClick('about')}>
                    ABOUT
                </a>
                <a href="#teams"
                    className={activeLink === 'teams' ? 'active' : ''}
                    onClick={() => handleClick('teams')}>
                    EQUIPOS
                </a>
                <a href="#contact"
                    className={activeLink === 'contact' ? 'active' : ''}
                    onClick={() => handleClick('contact')}>
                    CONTACTO
                </a>
            </div>
        </Container>
    );
}

export default Nav;
