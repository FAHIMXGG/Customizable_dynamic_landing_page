import React from 'react';
import Contact1 from './Components/Contact1';
import Contact2 from './Components/Contact2';

const Contact = ({contact}) => {
    return (
        <div>
            {
                contact === 1  ? (
                    <Contact1/>
                ) 
                : contact === 2  ? (
                    <Contact2/>
                )
                : contact === 3  ? (
                    <Cover3/>
                )
                : contact === 4  ? (
                    <Cover4/>
                )
                : contact === 5  ? (
                    <Cover5/>
                )
                : contact === 6  ? (
                    <Cover6/>
                )
                : contact === 7  ? (
                    <Cover7/>
                )
                : contact === 8  ? (
                    <Cover8/>
                )
                : contact === 9  ? (
                    <Cover9/>
                )
                 : (<Contact1/>)
            }
        </div>
    );
};

export default Contact;