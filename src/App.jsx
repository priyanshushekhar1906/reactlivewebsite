import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './Animwebhome';
import Contact from './Animwebcontact';
import About from './Animwebabout';
import Service from './Animwebservice';
import Navbar from './Animnavbar';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


const App=()=>{
    return <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact  path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/"/>

    </Switch>
    <Footer/>
    </>
}

export default App;