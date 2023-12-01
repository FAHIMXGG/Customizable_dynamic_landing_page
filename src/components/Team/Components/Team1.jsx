import React from 'react';

const Team1 = () => {
    const teamMembers = [
        {
            id: 1,
            name: "John Doe",
            position: "CEO",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod diam sit amet fermentum feugiat.",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "CTO",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod diam sit amet fermentum feugiat.",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Alice Johnson",
            position: "Lead Developer",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod diam sit amet fermentum feugiat.",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "Bob Williams",
            position: "Designer",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod diam sit amet fermentum feugiat.",
            image: "https://via.placeholder.com/150",
        },
    ];
    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src={member.image} alt={member.name} className="w-full h-40 object-cover object-center" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                            <p className="text-gray-600">{member.position}</p>
                            <p className="text-gray-800 mt-4">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team1;