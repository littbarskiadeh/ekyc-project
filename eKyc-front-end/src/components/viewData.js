import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import ClientData from "./clientData";

const SEARCH_URI = 'http://localhost:8080/api/clientData/search';

const ViewData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('email'));
    const [token, setToken] = useState(localStorage.getItem('token'));

    const handleSearch = async (query) => {
        setIsLoading(true);
        const response = await fetch(`${SEARCH_URI}/${query}`, {
            headers: {
                'auth-token': token
            }
        });
        if (response.ok) {
            const items = await response.json();
            const options = items.map((i) => ({
                id: i._id,
                name: i.fullName,
            }));

            setOptions(items);
            setIsLoading(false);
        }
    };

    // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.
    const filterBy = () => true;

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (selectedId) {
            setSelectedOption(selectedId);
        }
    };

    return (
        <div>
            <p className='loginTag'>
                Logged in: {loggedInUser}
            </p>

            <Form>
                <Form.Row>
                    <Col xs={7}>
                        <AsyncTypeahead
                            filterBy={filterBy}
                            id="async-example"
                            isLoading={isLoading}
                            labelKey="fullName"
                            minLength={3}
                            onSearch={handleSearch}
                            onChange={(s) => setSelectedId(s[0])}
                            options={options}
                            placeholder="Search for a name..."
                            renderMenuItemChildren={(option, props) => (
                                <Fragment>
                                    <span>{option.fullName}</span>
                                </Fragment>
                            )}
                        />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Retrieve Data
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
            <br />
            <br />
            { selectedOption && <ClientData {...selectedOption} />}
        </div>
    );
};
export default ViewData;