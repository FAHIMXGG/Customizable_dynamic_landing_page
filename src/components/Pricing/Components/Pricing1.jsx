import React from 'react';

const Pricing1 = () => {
    const pricingPlans = [
        {
            id: 1,
            name: "Basic Plan",
            price: "$9.99",
            features: ["Feature 1", "Feature 2", "Feature 3"],
        },
        {
            id: 2,
            name: "Pro Plan",
            price: "$19.99",
            features: ["All Basic Plan features", "Feature 4", "Feature 5"],
        },
        {
            id: 3,
            name: "Premium Plan",
            price: "$29.99",
            features: ["All Pro Plan features", "Feature 6", "Feature 7"],
        },
    ];

    return (
        <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-lg overflow-hidden shadow-lg text-center p-6">
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-2">{plan.price}</p>
            <ul className="text-left">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-1">
                  {feature}
                </li>
              ))}
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

export default Pricing1;