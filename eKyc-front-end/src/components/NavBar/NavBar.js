import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css'

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* <Link to="/verifyId">Verify</Link> */}
                </li>
                <li>
                    <Link to="/clientData">Add Client Data</Link>
                </li>
                <li>
                    <Link to="/viewData">View Data</Link>
                </li>
            </ul>
        </nav>
    )

}

export default NavBar;