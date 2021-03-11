import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar=()=>{
    return <>
    <div className='Menu'>
    <NavLink exact className="NavLink" activeClassName="active_class" to="/">AboutUS</NavLink>
    <NavLink exact activeClassName="active_class" className="NavLink" to="/contact">ContactUS </NavLink>
    <NavLink exact className="NavLink" activeClassName="active_class" to="/search">Search</NavLink>
    <NavLink  exact activeClassName="active_class" className="NavLink" to="/contact/name">NAME</NavLink>
    <NavLink exact to="/user/priyanshu/singh" className="NavLink" activeClassName="active_class">User</NavLink>
     
      </div>
        {/* <a href="/">AboutUS</a>
        <a href="/contact">ContactUS</a> */}
        
    </>; 
};

export default Navbar;