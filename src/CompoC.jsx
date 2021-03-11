import React from 'react';
import { FirstName, LastName } from './AppContext';

const CompoC = () => {

    return (
        <>
            <FirstName.Consumer>{(fname) => {
                return (<>
                    <LastName.Consumer>
                        {(lname) => {
                            return <h1>{fname}{lname}</h1>

                        }}
                    </LastName.Consumer>

                </>
                )

            }}</FirstName.Consumer>

        </>);
};

export default CompoC;