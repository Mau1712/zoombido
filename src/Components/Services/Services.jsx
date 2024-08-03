
import { Container } from 'react-bootstrap'

import fpvicon from "../../assets/Images/FPV-icon.png"
import inmoIcon from "../../assets/Images/inmoIcon.png"
import estabIcon from "../../assets/Images/estabIcon.png"
import liveIcon from "../../assets/Images/liveIcon.png"
import tourIcon from "../../assets/Images/tourIcon.png"
import paisIcon from "../../assets/Images/paisIcon.png"

import "./Services.css"

const Services = () => {
    return (
        <Container className='servicesContainer'>
            <div className='servicesTitle'>
                <h2>SERVICIOS</h2>
            </div>

            <div className='servicesContent'>

                <div className='serviceItem serviceItem1'>
                    <a href="">
                        <img src={estabIcon} alt="" />
                        <p>Drone Estabilizador</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de la Estabilizador</p>
                        </div>
                    </a>
                </div>

                <div className='serviceItem serviceItem2'>
                    <a href="">
                        <img src={fpvicon} alt="" />
                        <p>FVP</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de FVP</p>
                        </div>
                    </a>
                </div>

                <div className='serviceItem serviceItem3'>
                    <a href="">
                        <img src={tourIcon} alt="" />
                        <p>Tour FPV</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de Tour FPV</p>
                        </div>
                    </a>
                </div>

                <div className='serviceItem serviceItem4'>
                    <a href="">
                        <img src={liveIcon} alt="" />
                        <p>Transmisión en vivo</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de la Transmisión</p>
                        </div>
                    </a>
                </div>

                <div className='serviceItem serviceItem5'>
                    <a href="">
                        <img src={inmoIcon} alt="" />
                        <p>Inmobiliaria</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de la Inmobiliaria</p>
                        </div>
                    </a>
                </div>

                <div className='serviceItem serviceItem6'>
                    <a href="">
                        <img src={paisIcon} alt="" />
                        <p>Paisajismo</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de Paisajismo</p>
                        </div>
                    </a>
                </div>

            </div>
        </Container>
    )
}

export default Services