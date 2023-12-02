import React from 'react';

const Pricing2 = () => {
    const hostingPlans = [
        {
            id: 1,
            name: "Starter Plan",
            price: "$5.99",
            diskSpace: "10 GB",
            bandwidth: "100 GB",
            websites: 1,
            databases: 1,
            sslCertificate: true,
        },
        {
            id: 2,
            name: "Standard Plan",
            price: "$9.99",
            diskSpace: "50 GB",
            bandwidth: "500 GB",
            websites: 5,
            databases: 5,
            sslCertificate: true,
        },
        {
            id: 3,
            name: "Pro Plan",
            price: "$19.99",
            diskSpace: "100 GB",
            bandwidth: "Unlimited",
            websites: 10,
            databases: 10,
            sslCertificate: true,
        },
    ];
    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {hostingPlans.map((plan) => (
                    <div key={plan.id} className="bg-white rounded-lg overflow-hidden shadow-lg text-center p-6">
                        <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
                        <p className="text-gray-600 mb-2">{plan.price}</p>
                        <ul className="text-left mb-4">
                            <li>Disk Space: {plan.diskSpace}</li>
                            <li>Bandwidth: {plan.bandwidth}</li>
                            <li>Websites: {plan.websites}</li>
                            <li>Databases: {plan.databases}</li>
                            <li>SSL Certificate: {plan.sslCertificate ? 'Included' : 'Not Included'}</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-700">
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing2;