import React, { useState } from 'react';
import Navbar from '../components/dashboard/Navbar/Navbar';
import HomeComponent from '../components/dashboard/HomeComponent';
import MobileView from '../Dashboard/Sidebar/MobileView';

const Test = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const hoverTextStyle = {
        cursor: 'pointer',
        position: 'relative',
    };

    const hoverWindowStyle = {
        display: 'block',
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#fff',
        padding: '10px',
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        width: '1400px',
        height: '704px',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
    };

    return (
        <div className="flex items-center justify-center">
            <div
                style={{ position: 'relative', padding: '20px', border: '1px solid #ccc' }}
            >
                <div
                    style={hoverTextStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Hover me!
                </div>
                <div
                    className="inline-style-tailwind"
                    style={hoverWindowStyle}
                >
                    <div className='flex gap-5'>
                        <div className='py-20 w-[1000px]'>
                            <HomeComponent />
                        </div>
                        <div className='w-[380px] h-60'>
                            <MobileView />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Test;
