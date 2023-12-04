import React, { useState } from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import BlogHover from './Components/BlogHover';
import Blog from './Components/Blog';
import MobileView from '../../Dashboard/Sidebar/MobileView';

const BlogComponent = () => {
    const [isActive, setIsActive] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [hover, setHover] = useState();
    const [click, setClick] = useState(1);

    const decreaseClick = () => {
        setClick((prevClick) => {
            setIsActive((prevValue) => (prevValue > 1 ? prevClick - 1 : prevValue));
            return prevClick > 1 ? prevClick - 1 : prevClick;
        });
    };

    const increaseClick = () => {
        setClick((prevClick) => {
            setIsActive((prevValue) => (prevValue < 9 ? prevClick + 1 : prevValue));
            return prevClick < 9 ? prevClick + 1 : prevClick;
        });
    };

    const blogs = [];
    for (let i = 1; i < 10; i++) {
        blogs.push(i);
    }
    const hoverTextStyle = {
        cursor: "pointer",
        position: "relative",
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const hoverWindowStyle = {
        display: "block",
        position: "absolute",
        top: "100%",
        left: "60%",
        transform: "translateX(-50%)",
        backgroundColor: "#fff",
        padding: "10px",
        border: "1px solid #ccc",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 50,
        width: "1400px",
        height: "704px",
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
    };

    const handleHover = (blog) => {
        setHover(blog);
    };

    const handleClick = (blog) => {
        setClick(blog);
        setIsActive(blog);
    };
    return (
        <> <div className="flex gap-2">
            <button onClick={decreaseClick}>
                <IoArrowBackCircleOutline />
            </button>
            <div className="w-full h-full mt-8 flex flex-col lg:flex-row gap-5">
                <div className='w-full'>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center justify-center">
                            <div className="w-full flex items-center gap-6 h-fit lg:ml-7 relative mb-10">
                                {blogs.map((blog) => (
                                    <button
                                        key={blog}
                                        className={`rounded-md px-2 hover:bg-[#FFC700] hover:text-black transition-all duration-300 ${blog === isActive
                                            ? "bg-[#FFC700] text-black"
                                            : "text-gray-600 border-2"
                                            }`}
                                        onMouseOver={() => {
                                            handleHover(blog);
                                        }}
                                        onClick={() => {
                                            handleClick(blog);
                                        }}
                                        style={hoverTextStyle}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Blog {blog}
                                    </button>
                                ))}
                                <div className="inline-style-tailwind" style={hoverWindowStyle}>
                                    <div className="flex items-center gap-3">
                                        <div className="h-full w-[1000px] ">
                                            <BlogHover hover={hover} />
                                        </div>
                                        <div className="w-[380px] h-full mt-10">
                                            <MobileView hover={hover} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='lg:h-[600px] flex flex-col w-full justify-center'>
                        <Blog click={click}></Blog>
                    </div>
                </div>

                <div className=" mt-[68px]">
                    <MobileView />
                </div>
            </div>

            <button onClick={increaseClick}>
                <IoArrowForwardCircleOutline />
            </button>
        </div>
        </>
    );
};

export default BlogComponent;