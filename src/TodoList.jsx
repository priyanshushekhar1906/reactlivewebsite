import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCompo from './ListCompo';



const TodoList=()=>{
    let [InputVal,SetInputVal]=useState("");
    let [InputVal2,SetInputVal2]=useState([]);
    
   const HandelInput=(event)=>{
        SetInputVal(event.target.value);

      }


   const StoreVal=()=>{
        SetInputVal2((Prev)=>{

            return [...Prev,InputVal];

        })
        SetInputVal(" ");
        
   };

   return( <>
        <div className="Main_div">
            <div className="Center_div">
            <br/>
                <h1>ToDo List</h1>
                <input type="text" placeholder="Add an Items" value={InputVal} onChange={HandelInput}></input>
                <Button className="newBtn" onClick={StoreVal}><AddIcon/></Button><br/>
                <ol>
                   
                    {InputVal2.map((cval,index)=>{ 
                         
                      return <ListCompo key={index} text={cval}/>
                    })
                    }
                   
                </ol>
               
                <br/>
            </div>
        </div>
    </>);
};



export default TodoList;