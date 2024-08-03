import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import contactImg from "../../assets/Images/matrice300.png"

import "./Contact.css"

const Contact = () => {
    return (
        <>
            <Container className='contactTitleContainer'>
                <h2>CONTACTO</h2>
            </Container>
            <Container className='contactContainer'>
                <Container className='ContactContent'>
                    <Form>
                        <Form.Group controlId="formFirstName">
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                className="custom-input"
                            />
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Control
                                type="text"
                                placeholder="Apellido"
                                className="custom-input"
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Control
                                type="email"
                                placeholder="E-mail"
                                className="custom-input"
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhone">
                            <Form.Control
                                type="tel"
                                placeholder="Teléfono"
                                className="custom-input"
                            />
                        </Form.Group>

                        <Form.Group controlId="formCompany">
                            <Form.Control
                                type="text"
                                placeholder="Empresa"
                                className="custom-input"
                            />
                        </Form.Group>

                        <div className='boxBtnForm'>
                            <Button type="submit">
                                Enviar
                            </Button>
                        </div>
                    </Form>
                </Container>

                <Container className='ContactContent'>
                    <img src={contactImg} alt="" />
                </Container>
            </Container>
        </>
    )
}

export default Contact