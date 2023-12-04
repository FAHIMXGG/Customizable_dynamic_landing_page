import React from 'react';
import Blog1 from './Blog1';
import Blog2 from './Blog2';

const BlogHover = ({hover}) => {
    return (
        <div>
            {
                hover === 1 ? (
                    <Blog1 />
                )
                    : hover === 2 ? (
                        <Blog2 />
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

export default BlogHover;