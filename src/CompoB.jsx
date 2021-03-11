import React, { useContext } from 'react';
import CompoC from './CompoC';
import {FirstName,LastName} from './AppContext';

const CompoB=()=>{
   const fname= useContext(FirstName);
   const lname= useContext(LastName);

    return <h1>My name is {fname}{lname}</h1>;
};

export default CompoB;