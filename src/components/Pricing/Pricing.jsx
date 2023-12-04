import React from 'react';
import Pricing1 from './Components/Pricing1';
import Pricing2 from './Components/Pricing2.Jsx';

const Pricing = ({pricing}) => {
    return (
        <div>
            {
                pricing === 1  ? (
                    <Pricing1/>
                ) 
                : pricing === 2  ? (
                    <Pricing2/>
                )
                : pricing === 3  ? (
                    <Cover3/>
                )
                : pricing === 4  ? (
                    <Cover4/>
                )
                : pricing === 5  ? (
                    <Cover5/>
                )
                : pricing === 6  ? (
                    <Cover6/>
                )
                : pricing === 7  ? (
                    <Cover7/>
                )
                : pricing === 8  ? (
                    <Cover8/>
                )
                : pricing === 9  ? (
                    <Cover9/>
                )
                 : (<Pricing1/>)
            }
        </div>
    );
};

export default Pricing;