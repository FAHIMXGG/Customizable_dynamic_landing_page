import React from 'react';
import Pricing1 from './Pricing1';
import Pricing2 from './Pricing2.Jsx';

const PriceHover = ({ hover }) => {
    return (
        <div>
            {
                hover === 1 ? (
                    <Pricing1 />
                )
                    : hover === 2 ? (
                        <Pricing2 />
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

export default PriceHover;