import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import SignUp from './components/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerifyIdentity from './components/verifyIdentity';
import ClientData from './components/clientData';
import Login from './components/login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <BrowserRouter history={History}>
        <Container>
          <br/>
          <br/>
          <Switch>
            <Route path="/" component={SignUp} exact />
            <Route path="/verifyId" component={VerifyIdentity} />
            <Route path="/login" component={Login} />
            <Route path="/clientData" component={ClientData} />
          </Switch>
        </Container>
      </BrowserRouter>
      );
  }
}
 
export default App;
