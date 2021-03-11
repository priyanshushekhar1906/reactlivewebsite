import React, { useState } from 'react';
import Sresult from './Sresult';
const Search=()=>{
    const [img,setImg]=useState("");
    const inputEvent=(event)=>{
        console.log(event.target.value);
        setImg(event.target.value);

    };
    return <>
    <div className="search">
    <input type="text" placeholder="Search anything..." value={img} onChange={inputEvent} />
     
    </div>
    {img===""?null:<Sresult name={img} />}
    </>
};

export default Search;