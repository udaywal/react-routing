import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    {/* <NavLink exact to="/" activeClassName="active">Home</NavLink> */}
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
            <hr/>
            <br/>
        </div>
    )
}

export default Navbar
