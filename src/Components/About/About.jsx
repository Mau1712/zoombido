

import { Container } from "react-bootstrap"
import zoombidoCEO from "../../assets/Images/zoombidoCEO.png"
import "./About.css"

const About = () => {
  return (
    <div className="aboutContainerFather">
      <Container className="aboutContainer">
        <div className="aboutCEOBox">
          <img src={zoombidoCEO} alt="" />
        </div>

        <div className="aboutCEOContent">
          <div className="aboutCEOContentTitle">
            <h2>ABOUT</h2>
          </div>

          <div className="boxbox">
            <div className="aboutCEOContentMv">
              <h3>
                MISIÓN
                <br />
                & VISIÓN
              </h3>
              <p>
                Misión: Posicionar ZOOMBIDO como el mejor
                equipo audiovisual de pilotaje de drones FPV
                y estabilizados, a nivel nacional, con resultados
                visuales de la mejor calidad.
              </p>

              <p>
                Visión: Ser referente latinoamericano en vuelo
                de drones y producciones audiovisuales de altura
                con academia y experiencia.
              </p>
            </div>

            <div className="aboutCEOContentVa">
              <h3>VALORES</h3>
              <p>
                Responsabilidad. Calidad. Seguridad. Confianza. Disciplina.
              </p>
            </div>

            <div className="aboutCEOContentOb">
              <h3>OBJETIVOS</h3>
              <p>
                Lograr captar al público meta que este en búsqueda
                de contenido audivisual desde una perspectiva
                aérea más estable, ágil y versátil.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About