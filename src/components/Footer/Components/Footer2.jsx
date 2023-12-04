import React from 'react';

const Footer2 = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white p-8">
                <div className="container mx-auto flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Company</h2>
                        <p>About Us</p>
                        <p>Contact</p>
                        <p>Careers</p>
                    </div>
                    <div className="mb-4 md:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Products</h2>
                        <p>Product 1</p>
                        <p>Product 2</p>
                        <p>Product 3</p>
                    </div>
                    <div className="mb-4 md:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Resources</h2>
                        <p>Blog</p>
                        <p>Whitepapers</p>
                        <p>Case Studies</p>
                    </div>
                </div>
                <hr className="border-t border-gray-600 my-6" />
                <div className="text-center">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer2;