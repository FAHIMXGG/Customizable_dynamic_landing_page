import React from 'react';
import Contact1 from './Contact1';
import Contact2 from './Contact2';

const Contact = ({click}) => {
    return (
        <div>
        {
            click=== 1  ? (
                <Contact1/>
            ) 
            : click === 2  ? (
                <Contact2/>
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

export default Contact;