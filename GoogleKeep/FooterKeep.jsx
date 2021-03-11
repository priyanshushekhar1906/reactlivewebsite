import React from 'react';
let Year=new Date().getFullYear();


const FooterKeep=()=>{

    return <>
    <footer>
    <p className="footer">Copyright &copy; {Year} </p>
    </footer>

    </>;
};


export default FooterKeep;