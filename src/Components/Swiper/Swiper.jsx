import { useState } from "react";
import "./Swiper.css";
import { Container } from "react-bootstrap";
import imgPrueba from "../../assets/Images/dronePrueba.png"

// Datos de las tarjetas
const cardData = [
    { image: imgPrueba, subtitle: "Subtitle 1" },
    { image: imgPrueba, subtitle: "Subtitle 2" },
    { image: imgPrueba, subtitle: "Subtitle 3" },
    { image: imgPrueba, subtitle: "Subtitle 4" },
    { image: imgPrueba, subtitle: "Subtitle 5" },
    { image: imgPrueba, subtitle: "Subtitle 6" },
];

const Swiper = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [touchStartX, setTouchStartX] = useState(0);
    const [offsetX, setOffsetX] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        const touchEndX = e.touches[0].clientX;
        setOffsetX(touchEndX - touchStartX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        if (offsetX > 50) {
            handlePrev();
        } else if (offsetX < -50) {
            handleNext();
        }
        setOffsetX(0);
    };

    const handleMouseDown = (e) => {
        setTouchStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setOffsetX(e.clientX - touchStartX);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (offsetX > 50) {
            handlePrev();
        } else if (offsetX < -50) {
            handleNext();
        }
        setOffsetX(0);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
    };

    return (
        <Container className="SwiperFather">

            <h2>
                EQUIPOS
            </h2>

            <div
                className="swiper-container"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                {cardData.map((card, index) => {
                    const positionIndex = (index - currentIndex + cardData.length) % cardData.length;
                    const zIndex = positionIndex === 1 ? 2 : 1;
                    const isCenter = positionIndex === 1;

                    return (
                        <div
                            key={index}
                            className={`swiper-card ${isCenter ? 'card-center' : ''}`}
                            style={{
                                zIndex,
                                transform: `translateX(${(positionIndex - 1) * 370 + offsetX}px)`, // Espacio entre tarjetas
                            }}
                        >
                            <img src={card.image} alt={`Card ${index + 1}`} className="card-image" />
                            <div className="card-subtitle">{card.subtitle}</div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default Swiper;
