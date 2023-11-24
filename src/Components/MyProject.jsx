import React, { useContext, useEffect, useState } from 'react'
import { addProjectResponseContext } from '../Contexts/ContextSahare'
import { userProjectsAPI } from '../Services/allAPI'
import AddProject from './AddProject'
import EditProject from './EditProject'

function MyProject() {
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
    const [userProject,setUserProject] = useState([])
    const getUserProject = async ()=>{
        if(sessionStorage.getItem("token")){
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              }
              const result = await userProjectsAPI(reqHeader)
              if(result.status===200){
                setUserProject(result.data)
                console.log(result.data);
              }else{
                console.log(result);
                console.log(result.response.data);
              }
        }
    } 
    useEffect(()=>{
        getUserProject() 
    },[addProjectResponse])
  return (
    <div className='card shadow p-3 mt-3'>

        <div className='d-flex'>
            <h3>My Projects</h3>
            <div className='ms-auto'> <AddProject /></div>
        </div>
        <div className='mt-4'>
            {userProject?.length>0? userProject.map(project=>(
                <div className='border d-flex align-items-center rounded p-2'>
                <h5>{project.title}</h5>
                <div className='icon ms-auto'>
                   <EditProject project={project} />
                    <a href={`${project.github}`} target="_blank" className='btn'><i className="fa-brands fa-github"></i></a>
                    <button className='btn'><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>

            )):<p>No Project Upload Yet</p>}
            
        </div>
    </div>
  )
}

export default MyProject