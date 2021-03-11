import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './CommonComp';
import Web from '../src/image/img2.png'
const Animhome = () => {
    return <>
        <Common
            name="Grow your business with"
            imgsrc={Web}
            visit='/service'
            btname="Get Started"
        />
    </>
}


export default Animhome;