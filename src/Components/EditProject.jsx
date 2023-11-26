import React, { useContext, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../Services/allAPI';
import { editProjectResponseContext } from '../Contexts/ContextSahare';

function EditProject({project}) {
  const {editProjectResponse, setEditProjectResponse} = useContext(editProjectResponseContext)

  const [projectDetails, setProjectDetails] = useState({
    id: project._id, title: project.title, language: project.language, overview: project.overview, github: project.github, website: project.website, projectImage: ""
  })
  const [preview, setpreview] = useState("")
  const [show, setShow] = useState(false);

  // it use cancel set old value
  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      id: project._id, title: project.title, language: project.language, overview: project.overview, github: project.github, website: project.website, projectImage: ""
    })
    setpreview("")
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (projectDetails.projectImage) {
      setpreview(URL.createObjectURL(projectDetails.projectImage))
    }
  }, [projectDetails.projectImage])

  // edit data

  const handleUpdate = async () => {
    const { id, title, language, overview, projectImage, github, website } = projectDetails

    if (!title || !language || !overview || !github || !website) {
      toast.info("please fill the form completely!!!")
    } else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("overview", overview)
      reqBody.append("projectImage", projectImage)
      reqBody.append("github", github)
      reqBody.append("website", website)
      preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", project.projectImage)

      const token = sessionStorage.getItem("token")
      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        }
        // api
        const result = await editProjectAPI(id, reqBody, reqHeader)
        if (result.status===200) {
          handleClose()
          console.log(result)
        } else {
          console.log(result)
          toast.error(result.response.data)
        }

      } else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }

        // api
        const result = await editProjectAPI(id, reqBody, reqHeader)
        if (result.status === 200) {
          handleClose()
        } else {
          console.log(result)
          toast.error(result.response.data)
        }
      }

    }
  }
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
          <Modal.Title>Edit Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
              <label>
                <input type="file" style={{ display: 'none' }} onChange={e => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
                <img src={preview ? preview : `${BASE_URL}/uploads/${project.projectImage}`} style={{ width: '100%', height: '240px' }} alt="" srcset="" />
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
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' theme='colored' />
    </>
  )
}

export default EditProject