import React, { memo } from 'react';

const Testimonial1 = memo(() => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            position: "CEO, Company A",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod diam sit amet fermentum feugiat.",
            avatar: "https://via.placeholder.com/80",
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "CTO, Company B",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod diam sit amet fermentum feugiat.",
            avatar: "https://via.placeholder.com/80",
        },
        {
            id: 3,
            name: "Alice Johnson",
            position: "Lead Developer, Company C",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod diam sit amet fermentum feugiat.",
            avatar: "https://via.placeholder.com/80",
        },
        {
            id: 4,
            name: "Bob Williams",
            position: "Designer, Company D",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod diam sit amet fermentum feugiat.",
            avatar: "https://via.placeholder.com/80",
        },
    ];
    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4 mx-auto" />
                        <p className="text-gray-800">{testimonial.content}</p>
                        <div className="mt-4">
                            <h2 className="text-lg font-bold">{testimonial.name}</h2>
                            <p className="text-gray-600">{testimonial.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Testimonial1;