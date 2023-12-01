import React from 'react';

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

const Blog2 = () => {
    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover object-center" />
                        <div className="p-6">
                            <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                            <p className="text-gray-600">Published on {post.date}</p>
                            <p className="text-gray-800 mt-4">{post.content.substring(0, 150)}...</p>
                            <a href="#" className="text-blue-500 hover:underline mt-4 block">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog2;