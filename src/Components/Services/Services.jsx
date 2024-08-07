
import { Container } from 'react-bootstrap'

import fpvicon from "../../assets/Images/fvpIcon.png"
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
                        <img src={estabIcon} alt="" />
                        <p>Drone Estabilizador</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de la Estabilizador</p>
                        </div>
                </div>

                <div className='serviceItem serviceItem2'>
                        <img src={fpvicon} alt="" />
                        <p>FVP</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de FVP</p>
                        </div>
                </div>

                <div className='serviceItem serviceItem3'>
                        <img src={tourIcon} alt="" />
                        <p>Tour FPV</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de Tour FPV</p>
                        </div>
                </div>

                <div className='serviceItem serviceItem4'>
                        <img src={liveIcon} alt="" />
                        <p>Transmisión en vivo</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de la Transmisión</p>
                        </div>
                </div>

                <div className='serviceItem serviceItem5'>
                        <img src={inmoIcon} alt="" />
                        <p>Inmobiliaria</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de la Inmobiliaria</p>
                        </div>
                </div>

                <div className='serviceItem serviceItem6'>
                        <img src={paisIcon} alt="" />
                        <p>Paisajismo</p>
                        <div className="overlayServ">
                            <p className="overlayText">Descripción de Paisajismo</p>
                        </div>
                </div>

            </div>
        </Container>
    )
}

export default Services