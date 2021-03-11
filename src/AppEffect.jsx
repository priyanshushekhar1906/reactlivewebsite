import React, { useState,useEffect } from 'react';


const AppEffect=()=>{
    const [num,setNum]=useState(0);
    const [nums,setNums]=useState(0);
    useEffect(()=>{
        alert("I am Clicked");
        console.log("Clicked");
    },[num])
    return(<>
    <button onClick={(()=>{
        setNum(num+1);
    })}>Click Me {num}</button>
    <br/>
    <button onClick={(()=>{
        setNums(nums+1);
    })}>Click Me {nums}</button>

    </>);
};


export default AppEffect;
