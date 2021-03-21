import React, { useState, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './AddClient.css'

const ClientData = (props) => {

    /*
    clientData = {
        fullname:"",
        birthdate:"",
        address: "",
        sin:""
    }
    */
    const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('email'));
    const [token, setToken] = useState(localStorage.getItem('token'));

    // User Data
    const [fullName, setfullName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [address, setAddress] = useState("");
    const [sin, setSin] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        console.log('Submit clicked!!');
        try {
            const response = await fetch(`http://localhost:8080/api/addClientData`, {
                method: 'POST',
                body: JSON.stringify({

                    fullName: fullName,
                    birthdate: birthdate,
                    address: address,
                    sin: sin,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });

            const savedClient = await response.json();
            if (response.ok) {
                console.log("Client data submitted successfully")
                console.log(savedClient)
                // alert(await response.json())
                alert("Saved successfully!!")
            }
            else {
                // handle condition where user login was not successful
                console.log("Client data not submitted successfully")
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <p className='loginTag'>
                Logged in: {loggedInUser}
            </p>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="Full Name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control placeholder="Enter full name" defaultValue={fullName} onChange={(e) => setfullName(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="Birthdate">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control type="date" placeholder="Enter Birthdate" defaultValue={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" defaultValue={address} onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formGridSin">
                    <Form.Label>Sin</Form.Label>
                    <Form.Control placeholder="Enter SIN here" defaultValue={sin} onChange={(e) => setSin(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
             </Button>
            </Form>
        </>
    );

}

export default ClientData;