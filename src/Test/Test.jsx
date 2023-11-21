import React, { useState } from 'react';

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
        width: '800px',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
    };

    return (
        <div className="flex items-center justify-center h-screen">
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
                    <div>
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, vel?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vero deserunt voluptate autem vel ipsum minima eum, veniam dolor harum!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
