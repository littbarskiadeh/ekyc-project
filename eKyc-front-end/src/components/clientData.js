import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const ClientData = (props) => {

    return (

            <Container fluid>
                <Row>
                    <Col md={2}><Form.Label>Full Name : </Form.Label></Col>
                    <Col><Form.Label>{props.fullName}</Form.Label></Col>
                </Row>
                <Row>
                    <Col md={2}><Form.Label>Birthdate : </Form.Label></Col>
                    <Col><Form.Label>{props.birthdate}</Form.Label></Col>
                </Row>
                <Row>
                    <Col md={2}><Form.Label>Address : </Form.Label></Col>
                    <Col><Form.Label>{props.address}</Form.Label></Col>
                </Row>
                <Row>
                    <Col md={2}><Form.Label>City : </Form.Label></Col>
                    <Col><Form.Label>{props.city}</Form.Label></Col>
                </Row>
                <Row>
                    <Col md={2}><Form.Label>State : </Form.Label></Col>
                    <Col><Form.Label>{props.state}</Form.Label></Col>
                </Row>
                <Row>
                    <Col md={2}><Form.Label>Postal Code : </Form.Label></Col>
                    <Col><Form.Label>{props.zip}</Form.Label></Col>
                </Row>
            </Container>
    );
}

export default ClientData;