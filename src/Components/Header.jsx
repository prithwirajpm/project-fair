import React, { useContext } from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAutherisationContext } from '../Contexts/TokenAuth'

function Header({insideHeader}) {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAutherisationContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    navigate('/')
  }
  return (
    <>
   
    <Navbar style={{backgroundColor:'#90ee90',zIndex:"1"}} className='position-fixed top-0 w-100'>
        <Container> 
          <Navbar.Brand>
          <h1 style={{fontSize:'30px'}} className='fw-bolder text-light'><i className="fa-brands fa-stack-overflow fa-beat"></i> <Link to={'/'}>Project Fair</Link></h1>
          </Navbar.Brand>
          {insideHeader && <button className='btn btn-primary' onClick={handleLogout}>LogOut</button> }
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header