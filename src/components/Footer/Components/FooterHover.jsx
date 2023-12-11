import React from 'react';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';

const FooterHover = ({hover}) => {
    return (
        <div>
             {
                hover=== 1  ? (
                    <Footer1/>
                ) 
                : hover === 2  ? (
                    <Footer2/>
                )
                : hover === 3  ? (
                    <Footer3/>
                )
                : hover === 4  ? (
                    <Footer4/>
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

export default FooterHover;