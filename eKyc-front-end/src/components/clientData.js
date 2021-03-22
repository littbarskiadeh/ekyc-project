import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ClientData = (props) => {

    const sin = props.sin;

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        console.log('Submit clicked!!', sin);
        alert('User is verified')

        // 1. Call HL verify user endpoint to get TRUTH
        // 2. Verify user data from MongoDB matches the TRUTH

        const response = await fetch(`http://localhost:8080/api/clientData/verify`, {
            method: 'POST',
            body: JSON.stringify({
                sin: sin,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const json = await response.json();
        if (response) {
            console.log("Client data verified successfully", json)
        }
    }

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
                <Col md={2}><Form.Label>Sin : </Form.Label></Col>
                <Col><Form.Label>{sin && "###-###-####"}</Form.Label></Col>
            </Row>

            <Button variant="success" type="submit" onClick={handleSubmit}>
                Verify user on Blockchain
             </Button>
        </Container>
    );
}

export default ClientData;