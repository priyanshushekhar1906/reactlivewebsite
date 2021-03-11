import React from 'react';
import About from './About';
import Contact from './Contact';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import User from './User';
import Search from './Search';
const App=()=>{
    const Error=()=>{
        return <h1>Oops! Page not found</h1>
    }
    const Name=(props)=>{
        return <h1>Hello,I am a {props.name} Page</h1>
    }
    return (<>
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={()=><About  name="about"/>}/>
    <Route exact path="/contact"  component={Contact}/>
    <Route exact path="/search" component={Search}/>
    <Route  path="/contact/name"  render={()=> <Name name="Name"/>}/> 
    <Route path="/user/:fname/:lname" component={User}/>
    {/* <Route component={Error}/> */}
    <Redirect to="/"/>
    </Switch>
    </BrowserRouter>
    </>);

};

export default App;