import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import HeaderTop from '../pages/Shared/Header/HeaderTop';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav  from '../pages/Shared/Right Nav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';


const Main = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <Container className="my-3">
               <Row className='text-center'>
                    <Col lg={3}>
                       <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;