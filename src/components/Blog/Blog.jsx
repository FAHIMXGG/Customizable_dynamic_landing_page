import React from 'react';
import Blog1 from './Components/Blog1';
import Blog2 from './Components/Blog2';

const Blog = ({blog}) => {
    return (
        <div>
            {
                blog === 1  ? (
                    <Blog1/>
                ) 
                : blog === 2  ? (
                    <Blog2/>
                )
                : blog === 3  ? (
                    <Cover3/>
                )
                : blog === 4  ? (
                    <Cover4/>
                )
                : blog === 5  ? (
                    <Cover5/>
                )
                : blog === 6  ? (
                    <Cover6/>
                )
                : blog === 7  ? (
                    <Cover7/>
                )
                : blog === 8  ? (
                    <Cover8/>
                )
                : blog === 9  ? (
                    <Cover9/>
                )
                 : (<Blog1/>)
            }
        </div>
    );
};

export default Blog;