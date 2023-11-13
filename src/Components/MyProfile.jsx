import React from 'react'
import Form from 'react-bootstrap/Form';


function MyProfile() {
    return (
        <>
            <div className='bg-light m-5 shadow rounded'>
                <div className='p-3'>
                    <div className='d-flex justify-content-between'>
                        <h3>My Profile</h3>
                        <button className='btn'><i class="fa-solid fa-check"></i></button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center pt-2 pb-2'>
                       <label>
                            <input type="file" style={{display:'none'}} />
                            <img src="https://amwik.org/wp-content/uploads/2022/03/Profile-Male-PNG-Clipart.png" style={{ width: '150px', height: '1ss50px' }} alt="" srcset="" />
                       </label>
                    </div>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="User Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="email" placeholder="GitHub" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="email" placeholder="LinkedIn" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="button" value='Update' className='btn btn-primary' />
                            </Form.Group>
                        </Form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MyProfile