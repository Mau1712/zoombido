import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    const speed1 = 450;
    const speed2 = 10;
    const speed3 = 350;
    const speed4 = 100;

    const checkIfVisible = () => {
        const counters = document.getElementById('counters');
        const rect = counters.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
            setHasStarted(true);
            window.removeEventListener('scroll', checkIfVisible);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkIfVisible);
        return () => {
            window.removeEventListener('scroll', checkIfVisible);
        };
    }, []);

    useEffect(() => {
        if (hasStarted) {
            const interval1 = setInterval(() => {
                setCount1((prev) => (prev < 4 ? prev + 1 : 4));
            }, speed1);

            const interval2 = setInterval(() => {
                setCount2((prev) => (prev < 500 ? prev + 1 : 500));
            }, speed2);

            const interval3 = setInterval(() => {
                setCount3((prev) => (prev < 6 ? prev + 1 : 6));
            }, speed3);

            const interval4 = setInterval(() => {
                setCount4((prev) => (prev < 40 ? prev + 1 : 40));
            }, speed4);

            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
                clearInterval(interval4);
            };
        }
    }, [hasStarted, speed1, speed2, speed3, speed4]);

    return (
        <Container id="counters" className="skillsContainer">
            <div className="counterContent">
                <div className="countBox">
                    {count1}<span>K</span>
                </div>
                <div>
                    <p>Fotografía</p>
                </div>
            </div>
            <div className="counterContent">
                <div className="countBox">
                    {count2}<span>+</span>
                </div>
                <div>
                    <p> Proyectos de Drone</p>
                </div>
            </div>
            <div className="counterContent">
                <div className="countBox">
                    {count3}<span>+</span>
                </div>
                <div className="countBox">
                    <p>Años de Experiencia</p>
                </div>
            </div>
            <div className="counterContent">
                <div className="countBox">
                    {count4}<span>+</span>
                </div>
                <div>
                    <p>Eventos Anuales</p>
                </div>
            </div>
        </Container>
    );
};

export default Skills;
