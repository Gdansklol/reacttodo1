import React from 'react';

const Template = ({children})=>{
    return(
    <div>
        <div>Today's Todo (0)</div>
        <div>{children}</div>

        </div>
        );
};

export default Template;