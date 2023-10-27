import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Assets/loginandreg.png'
import { Form } from 'react-bootstrap'

function Auth({ register }) {
    const isRegisterForm = register ? true : false
    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className='w-75 container'>
                <Link to={'/'} ><i className="fa-solid fa-arrow-left"></i>Back to Home</Link>
                <div className='card shadow p-5 bg-success'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <img src={Login} alt="Auth Image" srcset="" className='rounded-stsrt w-100' />
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-flex align-items-center flex-column'>
                                <h1 style={{ fontSize: '30px' }} className='fw-bolder text-light'><i className="fa-brands fa-stack-overflow fa-beat"></i> Project Fair</h1>
                            </div>
                            <h5 className='fw-bolder mt-2 pb-3 text-light text-center'>
                                {
                                    isRegisterForm ? 'Sign up to Your Account' : 'Sign In Your Account '
                                }
                            </h5>
                            <Form className='text-light w-100'>
                                {
                                    isRegisterForm &&
                                    <Form.Group className="mb-3" controlId="ForBasicName">
                                        <Form.Control type="text" placeholder="username" />
                                    </Form.Group>
                                }
                                     <Form.Group className="mb-3" controlId="ForBasicEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="ForBasicPassword">
                                        <Form.Control type="Password" placeholder="Password" />
                                    </Form.Group>

                                {
                                    isRegisterForm ? 
                                    <div>
                                        <button className='btn btn-light mb-2'>Register</button>
                                        <p>Already have an Account? Click here to <Link to={'/login'}>Login</Link></p>
                                    </div>:
                                    <div>
                                    <button className='btn btn-light mb-2'>Login</button>
                                    <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                                </div>

                                }
                            </Form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auth