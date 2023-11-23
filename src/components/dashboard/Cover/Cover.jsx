import React from 'react';
import Cover1 from './Cover1';
import Cover2 from './Cover2';

const Cover = ({hover}) => {
    console.log(hover)
    return (
        <div>
            {
                hover === 1 ? (
                    <Cover1/>
                ) : hover === 2  ? (
                    <Cover2/>
                ) : (<h1>pp</h1>)
            }
            
        </div>
    );
};

export default Cover;