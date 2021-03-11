import React from 'react';

const Sresult=(props)=>{
    const url=`https://source.unsplash.com/400x300?${props.name}`;
    return (<div className="imageSearch">
        <img  src={url} alt="Search Image"/>
    </div>)
}

export default Sresult;