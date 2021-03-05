import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {withRouter} from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    handleLoginLink = (event) => {
        console.log("Login clicked");
        this.props.history.push("/login");
    }

    handleRegister = async () => {
        console.log("Register clicked");
        const response = await fetch(`http://localhost:8080/api/user/register`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }),
        });

        const token = await response.text();
        if (response.ok) {
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('token', token);
            this.props.history.push("/verifyId");
        } else {
            alert(`Error : ${token}`);
        }
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
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
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" onChange={this.handleNameChange}/>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formBasicRegister">
                        <Button variant="info" onClick={this.handleRegister}>
                            Register
                        </Button>
                    </Form.Group>
                    <Button variant="link" onClick={this.handleLoginLink}>
                        Already have an account?
                    </Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(SignUp);