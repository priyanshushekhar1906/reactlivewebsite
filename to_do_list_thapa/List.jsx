import React from 'react';


const List=(props)=>{

    return(<>
    <div className="ToDO_style">
    <button onClick={()=>{
        props.onSelect(props.id);
        }} className=".btn">✖️</button>
     <li> {props.text}</li>
     </div>
     </>);
};

export default List;