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
        address: {
            address2:"",
            city:"",
            state:"",
            zip:"",
        }
    }
    */

    // access loggedin user prop with useLocation hook
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useState("");

    useEffect(() => {
        // get user detail passed from signup page
        let loggedInUser = localStorage.getItem('email');
        setLoggedInUser(loggedInUser);
        console.log(`logged in user has been set ${loggedInUser}`);
    }, [location])

    const [fullName, setfullName] = useState("");
    const [birthdate, setBirthdate] = useState("");

    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [addressCity, setAddressCity] = useState("");
    const [addressState, setAddressState] = useState("");
    const [addressZip, setAddressZip] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);


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
                    address2: address2,
                    city: addressCity,
                    state: addressState,
                    zip: addressZip,

                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const savedClient = await response.json();
            if (response.ok) {

                console.log("Client data submitted successfully")
                console.log(savedClient)
                // alert(await response.json())
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

    const onChangeHandler = (event) => {
        setSelectedFile({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
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

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" defaultValue={address2} onChange={(e) => setAddress2(e.target.value)} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="City" defaultValue={addressCity} onChange={(e) => setAddressCity(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control placeholder="State" defaultValue={addressState} onChange={(e) => setAddressState(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control placeholder="Zip" defaultValue={addressZip} onChange={(e) => setAddressZip(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.File
                        className="position-relative"
                        required
                        name="file"
                        label="File"
                        onChange={onChangeHandler}
                        id="validationFormik107"
                        feedbackTooltip
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
             </Button>
            </Form>
        </>
    );

}

export default ClientData;