import React,{ useState } from 'react'
import { Card,Button,Modal, Row, Col } from 'react-bootstrap'
import ProjectOne from '../Assets/projectOne.png'


function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card className='shadow mb-5 btn' onClick={handleShow}>
                <Card.Img variant="top" src={ProjectOne} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                        <img style={{height:'200px'}} className='img-fluid' src={ProjectOne} />
                        </Col>
                        <Col md={6}>
                            <h2>Project Title</h2>
                            <p>Project Overview : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero veniam minima dolores facere, modi sed inventore ea deleniti consectetur quo reprehenderit? Impedit recusandae suscipit a illo repellendus enim. Saepe, dolorem!</p>
                        <p>Language Used : <span className='fw-bolder'>HTML,CSS,React</span></p>
                        </Col>
                    </Row>
                    <div className='mt-3'>
                        <a href='https://github.com/prithwirajpm/E-cart.git' target='_blank' className='me-3 btn'><i className='fa-brands fa-github fa-2x'></i></a>
                        <a href='https://e-cart-prithwi.vercel.app/' target='_blank' className='me-3 btn'><i className='fa-solid fa-link fa-2x'></i></a>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard