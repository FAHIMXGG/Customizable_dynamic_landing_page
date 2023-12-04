import React from 'react';
import Testimonial from './Testimonial';
import Testimonial2 from './Testimonial2';
import Testimonial1 from './Testimonial1';

const TestimonialHover = ({hover}) => {
    return (
        <div>
            {
                hover === 1 ? (
                    <Testimonial1 />
                )
                    : hover === 2 ? (
                        <Testimonial2 />
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

export default TestimonialHover;