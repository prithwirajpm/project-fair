
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Project
            </Button>

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
                        <div className='col-6'>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-gallery-187-902099.png" style={{ width: '100%' }} alt="" srcset="" />
                        </div>
                        <div className='col-6'>
                                <div className='mt-2'><input type="text" class="form-control" placeholder='Project Title' /></div>
                                <div className='mt-2'><input type="text" class="form-control" placeholder='Lamguage  Used' /></div>
                                <div className='mt-2'><input type="text" class="form-control" placeholder='Github Link' /></div>
                                <div className='mt-2'><input type="text" class="form-control" placeholder='Website Link' /></div>
                                <div className='mt-2'><input type="text" class="form-control" placeholder='Project Overview' /></div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddProject;