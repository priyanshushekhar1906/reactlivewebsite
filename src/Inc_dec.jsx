import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Inc_dec=()=>{
    const [value,setvalue]=useState(0);
    const increment=()=>{
        setvalue(value+1);

    };
    const decrement=()=>{
        if(value>0)
        {
            setvalue(value-1)

        }
        
        else{
            alert("Sorry negative no is not valid");
            setvalue(0);
        }
    };

    return (<div className="Main_div">
    <div className="Center_div">
        <h1 className="head">{value}</h1>
        <div className="Btn">
        <Tooltip title="Add">
          <Button onClick={increment} className="btn_green"><AddIcon/></Button>  
          </Tooltip>
          <Tooltip title="Delete">
          <Button onClick={decrement} className="btn_red"><RemoveIcon/></Button>
          </Tooltip>
        </div>
    </div>
</div>);
};
export default Inc_dec;