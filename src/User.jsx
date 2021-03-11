import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';

// const User=({match})=>{
//     return (<h1>Hello,I am a {match.params.fname} Page</h1>);
// }

const User=()=>{
    const {fname,lname}=useParams(); 
    const location=useLocation();
    const history=useHistory();
    // console.log(location);
    console.log(history);
    return (<>
    <h1>Hello,I am a {fname} {lname} Page</h1>
    <p>Your current location is {location.pathname}</p>
    {location.pathname==="/user/priyanshu/singh"?<button onClick={()=>{history.push("/")}}>Go back</button>:null}
    </>);
}


export default User;