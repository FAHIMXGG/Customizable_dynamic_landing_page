import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer3 = () => {
    return (
        <div>
            <div className="bg-[url('https://cdn.discordapp.com/attachments/1094651413235253289/1182163462487556186/baes.jpg?ex=6583b284&is=65713d84&hm=6c487995faf6d5acbbbdf56c3f49dc04790dc39f503f7643d65c71aee0f3ad73&')] py-20 text-white lg:px-48 mx-auto flex flex-col md:flex-row justify-between">
                <div className='w-6/12'>
                    <h1 className='text-3xl font-bold'>We build amazing architectural designs</h1>
                    <div className='flex'>
                        <input type="text" class="outline-none border-none bg-transparent text-gray-700 py-2  block w-full appearance-none leading-normal" placeholder="Enter Your Email Address"/>
                        <button><FaArrowRight/></button>
                    </div>
                    <hr />
                    <div className='mt-5 flex justify-between'>
                        <div>
                            <h1 className='text-lg'>+23 425 4466 80</h1>
                            <h1>needhelp@company.com</h1>
                        </div>
                        <div className=''>
                            <button className='rounded-full p-3 mx-1 bg-[#1D1D1D] hover:bg-[#E3B25A]'><FaTwitter /></button>
                            <button className='rounded-full p-3 mx-1 bg-[#1D1D1D] hover:bg-[#E3B25A]'><FaFacebookF /></button>
                            <button className='rounded-full p-3 mx-1 bg-[#1D1D1D] hover:bg-[#E3B25A]'><FaPinterestP /></button>
                            <button className='rounded-full p-3 mx-1 bg-[#1D1D1D] hover:bg-[#E3B25A]'><FaInstagram /></button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-xl font-bold mb-2">Explore</h2>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Our Services</p>
                    <p>Recent Projects</p>
                    <p>Press Media</p>
                </div>
                <div>
                    <h2 className="text-white text-xl font-bold mb-2">Contact</h2>
                    <p>30 Broklyn Golden Street,</p>
                    <p>New York United States of</p>
                    <p>America</p>
                </div>
            </div>
            <div className='py-5 bg-[#1D1D1D] text-white'>
                <p className='text-center'>© All Copyright 2023 by X</p>
            </div>

        </div>
    );
};

export default Footer3;