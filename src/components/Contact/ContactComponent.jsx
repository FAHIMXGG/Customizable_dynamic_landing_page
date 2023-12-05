import React, { useState } from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import MobileView from '../../Dashboard/Sidebar/MobileView';
import Contact from './Components/Contact';
import ContactHover from './Components/ContactHover';
import Swal from 'sweetalert2';

const ContactComponent = () => {
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

    const contacts = [];
    for (let i = 1; i < 10; i++) {
        contacts.push(i);
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

    const handleHover = (contact) => {
        setHover(contact);
    };

    const handleClick = (contact) => {
        setClick(contact);
        setIsActive(contact);
    };
    
    const handleUpdate = () =>{
        // console.log(click)
        fetch('http://localhost:3000/headers/656d5cbf17fd01f5c69cbd3b', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ contact: click }),
        })
            .then((response) => {
                if (response.ok) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Saved contact ${click}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    console.error('Failed');
                }
            })
            .catch((error) => {
                console.error('Error', error);
            });
    }
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
                                {contacts.map((contact) => (
                                    <button
                                        key={contact}
                                        className={`rounded-md px-2 hover:bg-[#FFC700] hover:text-black transition-all duration-300 ${contact === isActive
                                            ? "bg-[#FFC700] text-black"
                                            : "text-gray-600 border-2"
                                            }`}
                                        onMouseOver={() => {
                                            handleHover(contact);
                                        }}
                                        onClick={() => {
                                            handleClick(contact);
                                        }}
                                        style={hoverTextStyle}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Contact {contact}
                                    </button>
                                ))}
                                <div className="inline-style-tailwind" style={hoverWindowStyle}>
                                    <div className="flex items-center gap-3">
                                        <div className="h-full w-[1000px] ">
                                            <ContactHover hover={hover} />
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
                        <Contact click={click}></Contact>
                    </div>
                </div>

                <div className=" flex flex-col items-end gap-5">
                    <button onClick={() => handleUpdate()}  className='btn btn-warning btn-sm w-16'>Save</button>
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

export default ContactComponent;