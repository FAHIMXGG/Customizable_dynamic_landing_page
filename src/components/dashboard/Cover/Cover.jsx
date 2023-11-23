import React from 'react';
import Cover1 from './Cover1';
import Cover2 from './Cover2';
import Cover3 from './Cover3';
import Cover4 from './Cover4';
import Cover5 from './Cover5';

const Cover = ({hover}) => {
    console.log(hover)
    return (
        <div>
            {
                hover === 1  ? (
                    <Cover1/>
                ) 
                : hover === 2  ? (
                    <Cover2/>
                )
                : hover === 3  ? (
                    <Cover3/>
                )
                : hover === 4  ? (
                    <Cover4/>
                )
                : hover === 5  ? (
                    <Cover5/>
                )
                 : (<Cover1/>)
            }
            
        </div>
    );
};

export default Cover;