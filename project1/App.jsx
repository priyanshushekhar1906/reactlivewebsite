import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';
const favSeries="Netflix";
  
// const FavS=()=>{
// if(favSeries==="Netflix"){
//     return <Netflix/>;
//     }
// else{
//     return <Amazon/>;

    
// }
// };
// const FavS=()=>{return(favSeries==="Netflix"?<Netflix/>:<Amazon/>);}
const App=()=>(<>
<h1 className="Heading_page">List of top 5 netflix series in 2020</h1>

 {/* <FavS/> */}
 {favSeries==="Netflix"?<Netflix/>:<Amazon/>}

 
</>
);
export default App;