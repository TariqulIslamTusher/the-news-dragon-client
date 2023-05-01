import React from 'react';
import logo from '../../../../assets/logo.png'
import Navbar from './Navbar';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const HeaderTop = () => {
    return (
        <Container>
            <div className='text-center'>
                <img className='pt-4 pb-2' src={logo} alt="" />
                <p className='text-muted my-0'>Journalism Without Fear or Favour</p>
                <span>{moment().format('dddd, MMMM DD, YYYY')}</span>

                <div className='d-flex align-items-center'>
                    <Button variant='danger'>Latest</Button>
                    <Marquee pauseOnHover={true} speed={100} className='text-danger'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, hic.</p>

                        <p>this Is the last part of lorem</p>

                        <p>Another Item to be filled in here</p>
                    </Marquee>
                </div>
                <Navbar></Navbar>
            </div>
        </Container>
    );
};

export default HeaderTop;