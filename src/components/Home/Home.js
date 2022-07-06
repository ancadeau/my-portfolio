import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';

function Home(){
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h1>
                        <Icon icon="ant-design:home-outlined" inline={true} /> {''}
                        Home
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;