import React from 'react';

const Team2 = () => {
    const features = [
        {
            id: 1,
            title: "Responsive Design",
            description: "Our website is designed to work seamlessly on various devices and screen sizes.",
            icon: "📱",
        },
        {
            id: 2,
            title: "User-Friendly Interface",
            description: "Intuitive and easy-to-use interface for an optimal user experience.",
            icon: "👤",
        },
        {
            id: 3,
            title: "Fast Performance",
            description: "Enjoy quick loading times and a smooth browsing experience.",
            icon: "⚡",
        },
        {
            id: 4,
            title: "Secure Data Encryption",
            description: "Your data is encrypted and protected to ensure privacy and security.",
            icon: "🔒",
        },
        {
            id: 5,
            title: "24/7 Support",
            description: "Our support team is available around the clock to assist you.",
            icon: "🌐",
        },
    ];
    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {features.map((feature) => (
                    <div key={feature.id} className="bg-white rounded-lg overflow-hidden shadow-lg text-center p-6">
                        <div className="text-3xl mb-4">{feature.icon}</div>
                        <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
                        <p className="text-gray-800">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team2;