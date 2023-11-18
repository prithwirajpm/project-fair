import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import MyProfile from '../Components/MyProfile'
import MyProject from '../Components/MyProject'

function Dashboard() {
  const [username,setUsername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])
  return (
    <div>
      <Header insideHeader/>
      <Row style={{margin:'100px'}} className='container d-flex'>
        <Col sm={12} md={8}>
          <h2>Welcom <span className='text-danger'>{username}</span></h2>
          <MyProject />
        </Col>
        <Col sm={12} md={4}>
          <MyProfile />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard