import React from 'react';
import Footer1 from './Components/Footer1';
import Footer2 from './Components/Footer2';

const Footer = ({footer}) => {
    return (
        <div>
             {
                footer=== 1  ? (
                    <Footer1/>
                ) 
                : footer === 2  ? (
                    <Footer2/>
                )
                : footer === 3  ? (
                    <Cover3/>
                )
                : footer === 4  ? (
                    <Cover4/>
                )
                : footer === 5  ? (
                    <Cover5/>
                )
                : footer === 6  ? (
                    <Cover6/>
                )
                : footer === 7  ? (
                    <Cover7/>
                )
                : footer === 8  ? (
                    <Cover8/>
                )
                : footer === 9  ? (
                    <Cover9/>
                )
                 : (<Footer1/>)
            }
        </div>
    );
};

export default Footer;