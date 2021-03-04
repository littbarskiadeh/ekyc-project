import React, { useState } from 'react';
import { withRouter } from "react-router-dom";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { set } from 'mongoose';



const SignUp = (props) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);

    // const [userToken, setUserToken] = useState("");


    const handleLogin = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Login clicked");
        try {
            // send form data to API login endpoint
            const response = await fetch(`http://localhost:8080/api/user/login`, {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                setLoginStatus(true)
                // route user to next page
                props.history.push("/verifyId");
            }
            else {
                // handle condition where user login was not successful
            }
        }
        catch (err) {
            console.log(err);
        }

    }
    const handleRegister = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Register clicked");

        try {
            // send form data to API register endpoint
            const result = await fetch(`http://localhost:8080/api/user/register`, {
                method: 'POST',
                body: JSON.stringify({ name: userName, email: email, password: password }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (result.status === 200) { alert('registration successful') }
            console.log('result', result);
        }
        catch (err) {
            console.log(err);
        }

    }

    return (<div>
        <Jumbotron>
            <h1>Welcome to Group L crypto finance!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
                </p>
        </Jumbotron>
        <Form>
            <Form.Group as={Col} md="4" controlId="formBasicUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="userName" placeholder="Enter User Name" defaultValue={userName} onChange={(e) => setUserName(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            {/* <Form.Group as={Col} md="4" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="ConfirmPassword" onChange={this.handleConfirmPasswordChange}/>
                </Form.Group> */}

            <Form.Group as={Col} md="4" controlId="formBasicRegister" onClick={handleRegister}>
                <Button variant="info" >
                    Register
                    </Button>
                {' '}
                <Button variant="info" type="submit" onClick={handleLogin}>
                    Login
                    </Button>
            </Form.Group>

        </Form>
    </div>
    );
}

export default withRouter(SignUp);