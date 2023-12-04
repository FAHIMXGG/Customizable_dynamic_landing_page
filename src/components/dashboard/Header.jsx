import React from 'react';
import Cover1 from './Cover/Cover1';
import Cover3 from './Cover/Cover3';
import Cover2 from './Cover/Cover2';

const Header = ({header}) => {
    return (
        <div>
                {
                    header === 1 ? (
                        <Cover1 />
                    )
                        : header === 2 ? (
                            <Cover2 />
                        )
                            : header === 3 ? (
                                <Cover3 />
                            )
                                : header === 4 ? (
                                    <Cover4 />
                                )
                                    : header === 5 ? (
                                        <Cover5 />
                                    )
                                        : header === 6 ? (
                                            <Cover6 />
                                        )
                                            : header === 7 ? (
                                                <Cover7 />
                                            )
                                                : header === 8 ? (
                                                    <Cover8 />
                                                )
                                                    : header === 9 ? (
                                                        <Cover9 />
                                                    )
                                                        : (<Cover1 />)
                }
        </div>
    );
};

export default Header;