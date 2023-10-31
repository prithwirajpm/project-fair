import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideHeader}) {
  return (
    <>
   
    <Navbar style={{backgroundColor:'#90ee90',zIndex:"1"}} className='position-fixed top-0 w-100'>
        <Container> 
          <Navbar.Brand>
          <h1 style={{fontSize:'30px'}} className='fw-bolder text-light'><i className="fa-brands fa-stack-overflow fa-beat"></i> <Link to={'/'}>Project Fair</Link></h1>
          </Navbar.Brand>
          {insideHeader && <button className='btn btn-primary'>LogOut</button> }
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header