import React, { useState } from 'react';
import HeaderKeep from './HeaderKeep';
import CreateNoteKeep from './CreateNoteKeep';
import NoteKeep from './NoteKeep';
import FooterKeep from './FooterKeep';
import './GoogleKeep.css';

const App=()=>{
    const [addItem,setAddItem]=useState([]);
   const addNote=(note)=>{
       console.log("I am clicked");
       setAddItem((PrevVal)=>{
           return [...PrevVal,note];
       });
       console.log(note);
       

   };
   const onDelete=(id)=>{
       setAddItem((pre)=>
           pre.filter((currentData,indx)=>{
                 return indx!== id;
           })

       )
   }

    return <>
    <HeaderKeep/>
    <CreateNoteKeep passNote={addNote}/>
    
    {addItem.map((cval,index)=>{
        return <NoteKeep 
            key={index}
            id={index}
            title={cval.title}
            content={cval.content}
            deleteItem={onDelete}
        />

    })}
    <FooterKeep/>
    </>
};


export default App;