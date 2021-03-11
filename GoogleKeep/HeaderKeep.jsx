import React from 'react';
import Images from './Images/LOGO1.jpg';

const HeaderKeep=()=>{

      return <>
     <div className="header">
         <img src={Images} alt="logo" width='70' height='50'/>
         <h1>Priyanshu Keep</h1>
     </div>
       </>
};

export default HeaderKeep;