import React from 'react';

const testimonials = [
    {
        id: 1,
        name: "Alice Johnson",
        position: "CEO, Company A",
        content: "Working with this team has been an absolute pleasure. They are dedicated, creative, and deliver results beyond expectations.",
        avatar: "https://via.placeholder.com/80",
    },
    {
        id: 2,
        name: "Bob Williams",
        position: "CTO, Company B",
        content: "Exceptional service! The team went above and beyond to meet our requirements. I highly recommend their expertise and professionalism.",
        avatar: "https://via.placeholder.com/80",
    },
    {
        id: 3,
        name: "Charlie Davis",
        position: "Lead Developer, Company C",
        content: "The quality of work and attention to detail is remarkable. It's rare to find a team that combines technical skill with excellent communication.",
        avatar: "https://via.placeholder.com/80",
    },
    {
        id: 4,
        name: "David Smith",
        position: "Designer, Company D",
        content: "I'm impressed by their innovative design solutions. They have a keen eye for aesthetics and a deep understanding of user experience.",
        avatar: "https://via.placeholder.com/80",
    },
    {
        id: 5,
        name: "Emily Taylor",
        position: "Marketing Manager, Company E",
        content: "Collaborating with this team significantly boosted our online presence. Their marketing strategies are effective and results-driven.",
        avatar: "https://via.placeholder.com/80",
    },
    {
        id: 6,
        name: "Frank Miller",
        position: "Finance Director, Company F",
        content: "The financial insights provided by this team have been instrumental in our decision-making process. Trustworthy and reliable!",
        avatar: "https://via.placeholder.com/80",
    },
    {
        id: 7,
        name: "Grace Anderson",
        position: "HR Manager, Company G",
        content: "Their dedication to client satisfaction is commendable. They not only meet deadlines but also ensure the client's vision is realized.",
        avatar: "https://via.placeholder.com/80",
    },
    {
        id: 8,
        name: "Henry Clark",
        position: "Operations Manager, Company H",
        content: "Efficient and results-oriented. This team brings a wealth of experience to the table, making them a valuable partner for any project.",
        avatar: "https://via.placeholder.com/80",
    },
];

const Testimonial2 = () => {
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
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
};

export default Testimonial2;