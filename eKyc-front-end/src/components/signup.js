import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { withRouter } from "react-router-dom";


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: ""
        }
    }

    handleLogin = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Login clicked");
    }
    handleRegister = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Register clicked");
        this.props.history.push("/verifyId");
    }
    handleUserNameChange = (event) => {
        this.setState({ userName: event.target.value });
    };
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };
    // handleConfirmPasswordChange =(event) =>{
    //   let confirmPassword = event.target.value;
    //   if(this.props.password !== confirmPassword){

    //   }
    //}

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
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="userName" placeholder="Enter User Name"  onChange={this.handleUserNameChange}/>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
              </Form.Text>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                </Form.Group>

                {/* <Form.Group as={Col} md="4" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="ConfirmPassword" onChange={this.handleConfirmPasswordChange}/>
                </Form.Group> */}

                <Form.Group as={Col} md="4" controlId="formBasicRegister" onClick={this.handleRegister}>
                    <Button variant="info" >
                        Register
                    </Button>
                    {' '}
                    <Button variant="info" type="submit" onClick={this.handleLogin}>
                        Login
                    </Button>
                </Form.Group>

            </Form>
        </div>
        );
    }
}

export default withRouter(SignUp);