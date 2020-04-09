import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
const Header = props => {
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-3 py-0">
            <div className="container">

            <h1><a href="/" className="navbar-brand">{branding}</a></h1>
            </div>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className='nav-link'><i className='fas fa-home'/>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className='nav-link'><i className='fas fa-question'/>About Us</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact/add" className='nav-link'><i className='fas fa-plus'/>Add Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header