import React, { createContext } from 'react';
import CompoA from './CompoA';
const FirstName=createContext();
const LastName=createContext();

const AppContext=()=>{
   return (
      <>
      <FirstName.Provider value={"Priyanshu"}>
      <LastName.Provider value={" Shekhar "}>
      <CompoA/>
      </LastName.Provider>
      
      </FirstName.Provider>
     

   
   </>);
};


export default AppContext;
export {FirstName,LastName};