import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import MyProfile from '../Components/MyProfile'
import MyProject from '../Components/MyProject'

function Dashboard() {
  return (
    <div>
      <Header insideHeader/>
      <Row style={{margin:'100px'}} className='container d-flex'>
        <Col sm={12} md={8}>
          <h2>Welcom <span className='text-danger'>User</span></h2>
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