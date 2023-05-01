import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import HeaderTop from '../pages/Shared/Header/HeaderTop';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav  from '../pages/Shared/Right Nav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';

const NewsLayout = () => {

    return (
        <div>
            <HeaderTop></HeaderTop>
            <Container className="my-3">
                <Row className='text-center'>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;