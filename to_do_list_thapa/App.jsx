import React, { useState }  from 'react';
import List from './List';
const App=()=>{
    const [Items,SetItems]=useState("");
    
    const [Litems,SetLitems]=useState([]);
     let enterVal;
    const InputVal=(event)=>{
        SetItems(event.target.value);

    };
  
    const ListOfItems=()=>{
        SetLitems((oldarr)=>
        {
            return [...oldarr,Items];

        })
        SetItems('');
    };
    
    const deleteItem=(id)=>{

       SetLitems((olditems)=>{
           return olditems.filter((arrElem,index)=>{
               return index!==id;
           })
       })
    };

return (<>
<div className="main_div">
  <div className="center_div">
  <br/>
    <h1>ToDo List</h1>
    <br/>
    <input type="text" placeholder="Add a Items" value={Items} onChange={InputVal}/>
    <button onClick={ListOfItems} className="btn">+</button>
    <ol>
        {
          Litems.map((itemval,index)=>{

           return( <List
            key={index}
             id={index}
              text={itemval}
                  onSelect={deleteItem}
              />);
          })
        }
    </ol>
    </div>
    </div>
</>);
};


export default App;