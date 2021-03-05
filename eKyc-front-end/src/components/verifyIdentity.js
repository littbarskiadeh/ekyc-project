import React, {useEffect, useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {withRouter, useLocation} from 'react-router-dom';

const VerifyIdentity = (props) => {

    // access loggedin user prop with useLocation hook
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useState("");

    useEffect(() => {
        // get user detail passed from signup page
        let loggedInUser = localStorage.getItem('email');
        setLoggedInUser(loggedInUser);
        console.log(`logged in user has been set ${loggedInUser}`);
    }, [location])

    const handleNextClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Next clicked");
        // props.history.push("/clientData");

        props.history.push({
            pathname: '/clientData'
        })
    }

    return (
        <Jumbotron>
            <h1>Identity verification</h1>
            <p>
                This process may take few minutes. Once completed you will be able to add funds right away.
            </p>

            <p>Logged In User: {loggedInUser} </p>
            <p>
                <Button variant="info" onClick={handleNextClick}>Next</Button>
            </p>
        </Jumbotron>
    );

}

export default withRouter(VerifyIdentity);