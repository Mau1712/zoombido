
import { Container } from 'react-bootstrap'

import portfolioItem1 from "../../assets/Images/portfolio/portfolioItem1.png"
import portfolioItem2 from "../../assets/Images/portfolio/portfolioItem2.png"
import portfolioItem3 from "../../assets/Images/portfolio/portfolioItem3.png"
import portfolioItem4 from "../../assets/Images/portfolio/portfolioItem4.png"
import portfolioItem5 from "../../assets/Images/portfolio/portfolioItem5.png"
import portfolioItem6 from "../../assets/Images/portfolio/portfolioItem6.png"
import portfolioItem7 from "../../assets/Images/portfolio/portfolioItem7.png"
import portfolioItem8 from "../../assets/Images/portfolio/portfolioItem8.png"
import portfolioItem9 from "../../assets/Images/portfolio/portfolioItem9.png"

import "./Portfolio.css"


const Portfolio = () => {
    return (
        <Container className='portfolioContainer'>
            <div className='titlePortfolioContainer'>
                <h2>PORTAFOLIO</h2>
            </div>

            <div className='gridContainerPortfolio'>
                <div className="portfolioItem1 portfolioItem">
                    <a href="">
                        <img src={portfolioItem1} alt="" />
                        <div className="overlayPort">
                            <p className="overlayTextPort">VER VIDEO</p>
                        </div>
                    </a>

                </div>
                <div className="portfolioItem2 portfolioItem">
                    <a href="">
                        <img src={portfolioItem2} alt="" />
                        <div className="overlayPort">
                            <p className="overlayTextPort">VER VIDEO</p>
                        </div>
                    </a>
                </div>
                <div className="portfolioItem3 portfolioItem">
                    <a href="">
                        <img src={portfolioItem3} alt="" />
                        <div className="overlayPort">
                            <p className="overlayTextPort">VER VIDEO</p>
                        </div>
                    </a>
                </div>
                <div className="portfolioItem4 portfolioItem">
                    <a href="">
                        <img src={portfolioItem4} alt="" />
                        <div className="overlayPort">
                            <p className="overlayTextPort">VER VIDEO</p>
                        </div>
                    </a>
                </div>
                <div className="portfolioItem5 portfolioItem">
                    <a href="">
                        <img src={portfolioItem5} alt="" />
                        <div className="overlayPort">
                            <p className="overlayTextPort">VER VIDEO</p>
                        </div>
                    </a>
                </div>
                <div className="portfolioItem6 portfolioItem">
                    <a href="">
                        <img src={portfolioItem6} alt="" />
                        <div className="overlayPort">
                            <p className="overlayTextPort">VER VIDEO</p>
                        </div>
                    </a>
                </div>
                <div className="portfolioItem7 portfolioItem">
                    <a href="">
                        <img src={portfolioItem7} alt="" />
                        <div className="overlayPort">
                            <p className="overlayTextPort">VER VIDEO</p>
                        </div>
                    </a>
                </div>
                <div className="portfolioItem8 portfolioItem">
                    <a href="">
                        <img src={portfolioItem8} alt="" />
                        <div className="overlayPort">
                            <p className="overlayTextPort">VER VIDEO</p>
                        </div>
                    </a>
                </div>
                <div className="portfolioItem9 portfolioItem">
                    <a href="">
                        <img src={portfolioItem9} alt="" />
                        <div className="overlayPort">
                            <p className="overlayTextPort">VER VIDEO</p>
                        </div>
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Portfolio