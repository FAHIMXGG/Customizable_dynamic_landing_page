import React from 'react';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';

const Footer = ({click}) => {
    return (
        <div>
            {
                click=== 1  ? (
                    <Footer1/>
                ) 
                : click === 2  ? (
                    <Footer2/>
                )
                : click === 3  ? (
                    <Footer3/>
                )
                : click === 4  ? (
                    <Footer4/>
                )
                : click === 5  ? (
                    <Cover5/>
                )
                : click === 6  ? (
                    <Cover6/>
                )
                : click === 7  ? (
                    <Cover7/>
                )
                : click === 8  ? (
                    <Cover8/>
                )
                : click === 9  ? (
                    <Cover9/>
                )
                 : (<>gg</>)
            }
        </div>
    );
};

export default Footer;