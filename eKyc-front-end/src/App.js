import {BrowserRouter, Route, Switch} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import SignUp from './components/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerifyIdentity from './components/verifyIdentity';
import ClientData from './components/AddClient/AddClientData';
import NavBar from './components/NavBar/NavBar';
import Login from "./components/login";

/**
 UPDATES:
 - Connected backend apis and DB
 - Converted to functional components
 - Added NavBar for ease of dev and testing

 TO DO:
 - Add functionality to upload file
 - Add functionality to save file to DB
 - Update APIs to reflect file upload
 - Add make verifyId and addClientdata page protected
 - Add other pages if necessary
 - Testing
 */

const App = () => {
    return (
        <BrowserRouter history={History}>
            <NavBar/>
            <Container>
                <br/>
                <br/>
                <Switch>
                    <Route path="/" component={SignUp} exact/>
                    <Route path="/verifyId" component={VerifyIdentity}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/clientData" component={ClientData}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
