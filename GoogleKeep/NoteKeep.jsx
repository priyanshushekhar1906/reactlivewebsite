import React from  'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const NoteKeep=(props)=>{
    const deleteMethod=()=>{
        props.deleteItem(props.id);
    }
    return <>
        <div className="note">
            <h1>{props.title}</h1><br/>
            <p>{props.content}</p>
            <button onClick={deleteMethod} className="btn">
            <DeleteOutlineIcon className="deleteicon"/>
            </button>
        </div>
    </>;
};

export default NoteKeep;