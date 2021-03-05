import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: ""
         }
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleRegisterLink= (event) => {
        this.props.history.push("/");
    }

    handleLogin = async () => {

        const response = await fetch(`http://localhost:8080/api/user/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
        });
        const token = await response.text();
        console.log('token', token);
        localStorage.setItem('email', this.state.email);
        localStorage.setItem('token', token);
      
        console.log('from localsto', localStorage.getItem('email'));
        console.log('from localsto', localStorage.getItem('token'));
        this.props.history.push("/verifyId");
    }

    render() { 
        return (
            <div>
            <Form>
                <Form.Group as={Col} md="4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formBasicLogin">
                    <Button variant="info" onClick={this.handleLogin}>
                       Login
                    </Button>
                </Form.Group>
                <Button variant="link" onClick={this.handleRegisterLink }>
                  Don’t have an account?
                </Button>
            </Form>
        </div>
          );
    }
}
 
export default Login;