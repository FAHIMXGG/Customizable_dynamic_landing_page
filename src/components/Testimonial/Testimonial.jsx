import React from 'react';
import Testimonial1 from './Components/Testimonial1';
import Testimonial2 from './Components/Testimonial2';

const Testimonial = ({testimonial}) => {
    return (
        <div>
            {
                testimonial === 1  ? (
                    <Testimonial1/>
                ) 
                : testimonial === 2  ? (
                    <Testimonial2/>
                )
                : testimonial === 3  ? (
                    <Cover3/>
                )
                : testimonial === 4  ? (
                    <Cover4/>
                )
                : testimonial === 5  ? (
                    <Cover5/>
                )
                : testimonial === 6  ? (
                    <Cover6/>
                )
                : testimonial === 7  ? (
                    <Cover7/>
                )
                : testimonial === 8  ? (
                    <Cover8/>
                )
                : testimonial === 9  ? (
                    <Cover9/>
                )
                 : (<Testimonial1/>)
            }
        </div>
    );
};

export default Testimonial;