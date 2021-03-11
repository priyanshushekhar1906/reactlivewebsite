import React from 'react';
import SlotM from './Slot';


const App=()=>{

    return (
        <>
        <div className="full">
            <h1 className="heading_style"> 🎰 Welcome to <span style={{fontWeight:"bolder",color:"red",}}>Slot machine game</span>🎰</h1>
           <div className="slot_machine">
            <SlotM  x="😄" y="😄" z="😄" />
            <SlotM  x="😄" y="🎅" z="😄" />
            <SlotM  x="😆" y="😂" z="😉"/>
            <SlotM  x="😀" y="😂" z="🙃"/>
            </div>
            </div>
        </>
    )


}




export default App;