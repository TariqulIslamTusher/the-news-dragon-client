import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderTop from '../Header/HeaderTop';
import Footer from '../Footer/Footer';



const LoginLayout = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <Container className="my-3">
                <Row className='text-center'>
                    <Col lg={12}>
                        <Outlet></Outlet>
                    </Col>
                    
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;