import React from 'react';

const Footer1 = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white p-8">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
                        <h2 className="text-xl font-semibold mb-4">Company</h2>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
                        <h2 className="text-xl font-semibold mb-4">Products</h2>
                        <ul>
                            <li><a href="#">Product 1</a></li>
                            <li><a href="#">Product 2</a></li>
                            <li><a href="#">Product 3</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
                        <h2 className="text-xl font-semibold mb-4">Resources</h2>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Whitepapers</a></li>
                            <li><a href="#">Case Studies</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
                        <h2 className="text-xl font-semibold mb-4">Connect</h2>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="border-t border-gray-600 my-6" />
                <div className="text-center">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer1;