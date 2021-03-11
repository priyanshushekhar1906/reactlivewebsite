import React, { useState } from 'react';

const App=()=>{
    const [name,setName]=useState({
        fname:"",
        Pname:"", 
        email:"",
        MobNo:"",
        Qua:"",
    });
  
 const InputEvent=(event)=>{
     console.log(event.target.value);
     console.log(event.target.name);
    // const  value=event.target.value;
    //   const name= event.target.name;
    const {name,value}=event.target;

      setName((PrevValue)=>{
        //   console.log(PrevValue);
        return {
            ...PrevValue,
            [name]:value,

        }
        //  if(name==="fname")
        //  {
        //      return {
        //         fname:value,
        //         Pname:PrevValue.Pname,
        //         email:PrevValue.email,
        //         MobNo: PrevValue.MobNo,
        //     };
        //     }
        //         else if(name==="pass")
        //         {
        //             return{
        //                 Pname:value,
        //                 fname:PrevValue.fname,
        //                 email:PrevValue.email,
        //                 MobNo: PrevValue.MobNo,
        //             };
        //         }
        //         else if(name==="email")
        //         {
        //             return{
        //                 email:value,
        //                 fname:PrevValue.fname,
        //                 Pname:PrevValue.Pname,
        //                 MobNo: PrevValue.MobNo,


        //             }
        //         }
        //             else if(name==="Mob")
        //             {
        //                 return{
        //                      email:PrevValue.email,
        //                      fname:PrevValue.fname,
        //                      Pname:PrevValue.Pname,
        //                      MobNo: value,

        //                 }
        //     

                


         
      });
 };
  
 const Show =(event)=>{
event.preventDefault();
alert("Form submitted");

 }; 
 
 
    return (<>
    <form onSubmit={Show}>
    <div>
    <h1>Hello {name.fname} {name.Pname} </h1>
    <p>{name.email}</p>
    <p>{name.MobNo}</p>
    <p>{name.Qua}</p>
    <input type="text" name="fname" placeholder="Enter your name" onChange={InputEvent} value={name.fname}  ></input>
    <input type="password"  name="Pname" onChange={InputEvent} value={name.Pname}  ></input>
    <input type="email" name="email" placeholder="Enter your Email" onChange={InputEvent} value={name.email} autoComplete="off" ></input>
    <input type="number" name="MobNo" onChange={InputEvent} value={name.MobNo} ></input>
    <input type="text" name="Qua" value={name.Qua}   onChange={InputEvent}></input>
    <button type="submit" className="Btn">SUBMIT </button>
    </div>
    </form> 
    </>);


};


export default App;