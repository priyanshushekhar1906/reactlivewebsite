import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNoteKeep =(props)=>{
    const [expand,setExpand]=useState(false);
    const [note,setNote]=useState(
        {
            title:"",
            content:"",
        }
    );

    const InputEvent=(e)=>{
        // const inputVal=e.target.value;
        // const inputName=e.target.name;
       const {value,name}=e.target;
        setNote((PrevVal)=>{
            return {
                ...PrevVal,
                [name]:value,
                
            };

        });
        console.log(note);
    }
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });

    };
    const expandIt=()=>{
        setExpand(true);
    }
    const btoNormal=()=>{
        setExpand(false);
    }

    return (<>
    <div className="Main_note" onDoubleClick={btoNormal}>
        <form>
            {expand?<input
             type="text" 
             placeholder="Title" 
             name="title"
             value={note.title} 
             onChange={InputEvent}
             autoComplete="off"/>:null}

            <textarea
             rows="" 
             columns="" 
             placeholder="Write a note..."  
             name="content"
             value={note.content} 
             onChange={InputEvent}
             onClick={expandIt}
             >
              </textarea>
             { expand?
            <Button onClick={addEvent}>

            <AddIcon className="plus_sign"/>
            </Button>:null}
        </form>
    </div>
    </>);
};

export default CreateNoteKeep;