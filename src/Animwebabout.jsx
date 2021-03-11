import { common } from '@material-ui/core/colors';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './CommonComp';
import Web from '../src/image/img2.png';

const Animabout=()=>{
return <>
<Common  
name="Welcome to About page" 
imgsrc={Web} 
visit='/contact' 
btname="Contact Now"

/>
  
</>
}


export default Animabout;