import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Container>
            <div className='d-flex justify-content-between mx-auto'>
                <div className="d-flex gap-3 mx-auto list-unstyled text-dark">
                    <li><Link to='/category/0' className='text-decoration-none fw-bold text-black'>Home</Link></li>
                    <li><Link className='text-decoration-none fw-bold text-black'>About</Link></li>
                    <li><Link className='text-decoration-none fw-bold text-black'>Career</Link></li>
                </div>
                <div className="icon-button gap-3 d-flex align-items-center">
                    <span>Profile</span>
                    <Link to='/login'><Button variant='dark'>Log in</Button></Link>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;