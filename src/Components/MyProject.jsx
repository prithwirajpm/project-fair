import React from 'react'
import AddProject from './AddProject'

function MyProject() {
  return (
    <div className='card shadow p-3 mt-3'>

        <div className='d-flex'>
            <h3>My Projects</h3>
            <div className='ms-auto'> <AddProject /></div>
        </div>
        <div className='mt-4'>
            <div className='border d-flex align-items-center rounded p-2'>
                <h5>Projet Title</h5>
                <div className='icon ms-auto'>
                    <button className='btn'><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className='btn'><i className="fa-brands fa-github"></i></button>
                    <button className='btn'><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProject