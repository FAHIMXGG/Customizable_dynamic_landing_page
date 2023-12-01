import React from 'react';
import Team1 from './Team1';
import Team2 from './Team2';

const TeamHover = ({hover}) => {
    return (
        <div>
            {
                hover === 1 ? (
                    <Team1 />
                )
                    : hover === 2 ? (
                        <Team2 />
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

export default TeamHover;