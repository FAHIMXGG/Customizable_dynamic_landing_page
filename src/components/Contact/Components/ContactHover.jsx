import React from 'react';
import Contact1 from './Contact1';
import Contact2 from './Contact2';

const ContactHover = ({hover}) => {
    return (
        <div>
            {
                hover === 1 ? (
                    <Contact1 />
                )
                    : hover === 2 ? (
                        <Contact2 />
                    )
                        : hover === 3 ? (
                            <Cover3 />
                        )
                            : hover === 4 ? (
                                <Cover4 />
                            )
                                : hover === 5 ? (
                                    <Cover5 />
                                )
                                    : hover === 6 ? (
                                        <Cover6 />
                                    )
                                        : hover === 7 ? (
                                            <Cover7 />
                                        )
                                            : hover === 8 ? (
                                                <Cover8 />
                                            )
                                                : hover === 9 ? (
                                                    <Cover9 />
                                                )
                                                    : (<>ss</>)
            }
        </div>
    );
};

export default ContactHover;