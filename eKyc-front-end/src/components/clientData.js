import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ClientData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FullName:"",
            Birthdate:"",
            Address:"",
            Address2:"",
            city:"",
            state:"",
            zip:"",
            selectedFile: null
        }
    }
    handleFullNameChange = (event) => {
        this.setState({ FullName: event.target.value });
    };
    handleBirthdateChange = (event) => {
        this.setState({ Birthdate: event.target.value });
    };

    handleAddressChange = (event) => {
        this.setState({ Address: event.target.value });
    };
    handleAddress2Change = (event) => {
        this.setState({ Address2: event.target.value });
    };
    handleCityChange = (event) => {
        this.setState({ city: event.target.value });
    };
    handleStateChange = (event) => {
        this.setState({ state: event.target.value });
    };
    handleZipChange = (event) => {
        this.setState({ zip: event.target.value });
    };
    
    handleSubmit = async (event) => {
        const data = new FormData() 
        data.append('file', this.state.selectedFile);
        console.log("submit clicked");
    }

    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="FullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control placeholder="Enter full name" onChange={this.handleFullNameChange}  />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="Birthdate">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control type="date" placeholder="Enter Birthdate"  onChange={this.handleBirthdateChange}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" onChange={this.handleAddressChange} />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" onChange={this.handleAddress2Change}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={this.handleCityChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control onChange={this.handleStateChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control onChange={this.handleZipChange}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.File
                        className="position-relative"
                        required
                        name="file"
                        label="File"
                        onChange={this.onChangeHandler}
                        id="validationFormik107"
                        feedbackTooltip
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default ClientData;