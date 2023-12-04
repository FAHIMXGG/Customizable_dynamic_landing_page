import React from 'react';

const Blog1 = () => {
    const blogPosts = [
        {
            id: 1,
            title: "First Blog Post",
            date: "December 1, 2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: "https://via.placeholder.com/800x400",
        },
        {
            id: 2,
            title: "Second Blog Post",
            date: "December 5, 2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: "https://via.placeholder.com/800x400",
        },
        {
            id: 3,
            title: "Third Blog Post",
            date: "December 10, 2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: "https://via.placeholder.com/800x400",
        },
    ];
    return (
        <div>
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="mb-8">
                            <article className="prose lg:prose-xl">
                                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                                <p className="text-gray-600">Published on {post.date}</p>
                                <img src={post.image} alt={post.title} className="my-8" />
                                <p>{post.content}</p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog1;