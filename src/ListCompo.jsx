import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ListCompo=(props)=>{
    const [line,setLine]=useState(false);
const LineCut=()=>{
    setLine(true);
   
};

 return  (<div className="todo_Style">
 <span onClick={LineCut}><DeleteIcon  className="deleteIcon"/></span>
 <li style={{textDecoration:line?"line-through":"none",}} className="first">{props.text}</li>
 </div>)
};




export default ListCompo;