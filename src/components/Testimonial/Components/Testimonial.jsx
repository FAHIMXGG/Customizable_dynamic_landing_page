import React from 'react';
import Testimonial1 from './Testimonial1';
import Testimonial2 from './Testimonial2';

const Testimonial = ({click}) => {
    return (
        <div>
        {
            click=== 1  ? (
                <Testimonial1/>
            ) 
            : click === 2  ? (
                <Testimonial2/>
            )
            : click === 3  ? (
                <Cover3/>
            )
            : click === 4  ? (
                <Cover4/>
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

export default Testimonial;