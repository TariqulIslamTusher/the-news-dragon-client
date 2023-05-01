import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from './Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <h1>Log In with</h1>
            <Button className="w-100 my-2" variant='outline-warning'><FaGoogle></FaGoogle> Login with Google </Button> <br></br>
            <Button className="w-100 my-2" variant='outline-success'><FaGithub></FaGithub> Login with GitHub</Button>

            <div className="text-start">
                <h2>Find us On:</h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='me-2 my-2 text-primary'></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='me-2 my-2 text-danger'></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='me-2 my-2 text-primary'></FaTwitter> Twitter</ListGroup.Item>
                    

                </ListGroup>
            </div>

            <Qzone></Qzone>

            <div className='text-white p-3 bg-black'>
                <h2 className='my-2 fw-bold'>Create an Amazing Newspaper</h2>

                <p className='text-justify'>Dicover thousands of opitions easy to customise layouts, one click to import demo and muxh more.</p>

                <Button variant='danger' className='p-3'>Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;