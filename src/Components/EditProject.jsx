import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { BASE_URL } from '../Services/baseurl';

function EditProject({ project }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectDetails, setProjectDetails] = useState({
    title: project.title, language: project.language, overview: project.overview, github: project.github, website: project.website, projectImage: ""
})
const [preview, setpreview] = useState("")
  return (
    <>
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-pen-to-square"></i></button>
      <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <label>
                                <input type="file" style={{ display: 'none' }} />
                                <img src={`${BASE_URL}/uploads/${project.projectImage}`} style={{ width: '100%', height: '240px' }} alt="" srcset="" />
                            </label>

                        </div>
                        <div className='col-lg-6'>
                            <div className='mt-2'><input type="text" class="form-control" placeholder='Project Title' value={project.title
                            } /></div>
                            <div className='mt-2'><input type="text" class="form-control" placeholder='Lamguage  Used' value={project.language
                            } /></div>
                            <div className='mt-2'><input type="text" class="form-control" placeholder='Github Link' value={project.github
                            }  /></div>
                            <div className='mt-2'><input type="text" class="form-control" placeholder='Website Link' value={project.website
                            }  /></div>
                            <div className='mt-2'><input type="text" class="form-control" placeholder='Project Overview' value={project.overview
                            }  /></div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default EditProject