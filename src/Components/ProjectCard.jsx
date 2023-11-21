import React, { useState } from 'react'
import { Card, Button, Modal, Row, Col } from 'react-bootstrap'
import ProjectOne from '../Assets/projectOne.png'
import { BASE_URL } from '../Services/baseurl';


function ProjectCard({ project }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {project &&
                <Card className='shadow mb-5 btn' onClick={handleShow}>
                    <Card.Img variant="top" src={project?`${BASE_URL}/uploads/${project.projectImage}`:ProjectOne} />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                    </Card.Body>
                </Card>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{project.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img style={{ height: '200px' }} className='img-fluid' src={project?`${BASE_URL}/uploads/${project.projectImage}`:ProjectOne} />
                        </Col>
                        <Col md={6}>
                            <h2>{project.title}</h2>
                            <p>Project Overview:  <span className='fw-bolder'>{project.overview}</span> </p>
                            <p>Language Used : <span className='fw-bolder'>{project.language}</span></p>
                        </Col>
                    </Row>
                    <div className='mt-3'>
                        <a href={project.github} target='_blank' className='me-3 btn'><i className='fa-brands fa-github fa-2x'></i></a>
                        <a href={project.website} target='_blank' className='me-3 btn'><i className='fa-solid fa-link fa-2x'></i></a>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard