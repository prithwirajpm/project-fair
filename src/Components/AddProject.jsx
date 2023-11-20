
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';

function AddProject() {
    const [show, setShow] = useState(false);
    const [projectDetails, setProjectDetails] = useState({
        title: "", language: "", overview: "", github: "", website: "", projectImage: ""
    })
    const [preview, setpreview] = useState("")
    const [token, setToken] = useState("")
    console.log(projectDetails);

    const handleClose = () => {
        setShow(false);
        setProjectDetails({ title: "", language: "", overview: "", github: "", website: "", projectImage: "" })
        setpreview("")
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (projectDetails.projectImage) {
            setpreview(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        } else {
            setToken("")
        }
    }, [])


    // AddProject

    const handleAdd = async (e) => {
        e.preventDefault()
        const { title, language, overview, projectImage, github, website } = projectDetails
        if (!title || !language || !overview || !projectImage || !github || !website) {
            toast.info("please fill the form completely!!!")
        } else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("language", language)
            reqBody.append("overview", overview)
            reqBody.append("projectImage", projectImage)
            reqBody.append("github", github)
            reqBody.append("website", website)

            if (token) {
               const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await addProjectAPI(reqBody, reqHeader)

                if (result.status === 200) {
                    console.log(result.data);
                    handleClose()
                    alert("Project added")
                } else {
                    console.log(result);
                    toast.warning(result.response.data);
                }
            }


        }
    }

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
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <label>
                                <input type="file" style={{ display: 'none' }} onChange={e => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
                                <img src={preview ? preview : "https://cdn.iconscout.com/icon/free/png-256/free-gallery-187-902099.png"} style={{ width: '100%', height: '240px' }} alt="" srcset="" />
                            </label>

                        </div>
                        <div className='col-lg-6'>
                            <div className='mt-2'><input type="text" class="form-control" placeholder='Project Title' value={projectDetails.title
                            } onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} /></div>
                            <div className='mt-2'><input type="text" class="form-control" placeholder='Lamguage  Used' value={projectDetails.language
                            } onChange={e => setProjectDetails({ ...projectDetails, language: e.target.value })} /></div>
                            <div className='mt-2'><input type="text" class="form-control" placeholder='Github Link' value={projectDetails.github
                            } onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} /></div>
                            <div className='mt-2'><input type="text" class="form-control" placeholder='Website Link' value={projectDetails.website
                            } onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} /></div>
                            <div className='mt-2'><input type="text" class="form-control" placeholder='Project Overview' value={projectDetails.overview
                            } onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })} /></div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={(e) => handleAdd(e)}>Add</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-right' theme='colored' />
        </>
    );
}

export default AddProject;