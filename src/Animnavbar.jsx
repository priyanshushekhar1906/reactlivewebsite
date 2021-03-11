import React from 'react';
import {NavLink} from 'react-router-dom';

const Animnavbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink  className="navbar-brand" to="/">Priyanshu Web</NavLink>
                    
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active"  className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact US</NavLink>
                            </li>
                        </ul>
                   
                </div>
            </nav>
            </div>
            </div>
        </div>
        </>
    );
}



export default Animnavbar;