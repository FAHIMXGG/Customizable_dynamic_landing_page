import React from 'react';
import Cover1 from './Cover1';
import Cover2 from './Cover2';
import Cover3 from './Cover3';
import Cover4 from './Cover4';
import Cover5 from './Cover5';
import Cover6 from './cover6';
import Cover7 from './cover7';
import Cover8 from './cover8';
import Cover9 from './cover9';

const Cover = ({hover = 1}) => {
    console.log('hover',hover)
    //const hover = 2
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
                : hover === 6  ? (
                    <Cover6/>
                )
                : hover === 7  ? (
                    <Cover7/>
                )
                : hover === 8  ? (
                    <Cover8/>
                )
                : hover === 9  ? (
                    <Cover9/>
                )
                 : (<>gg</>)
            }
            
        </div>
    );
};

export default Cover;