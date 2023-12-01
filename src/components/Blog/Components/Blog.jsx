import React from 'react';
import Blog1 from './Blog1';
import Blog2 from './Blog2';

const Blog = ({click}) => {
    return (
        <div>
        {
            click=== 1  ? (
                <Blog1/>
            ) 
            : click === 2  ? (
                <Blog2/>
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

export default Blog;