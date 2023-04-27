import React, { useState } from 'react';
// import { icons } from '../../icons';
import Logo from '../../Assets/Img/Logo.png';
import { sidebarMenu } from '../../utilite/utilite';
import { Link } from 'react-router-dom';
import control from '../../Assets/Img/control.png';

const Sidebar = () => {

    const [open, setOpen] = useState(true);

    return (
        <div className={` ${open ? "w-72" : "w-20 "} bg-sidebarWhite h-screen p-5  pt-8 relative duration-300`}>
            <div onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-1 w-7  border-2 rounded-full  ${!open && "rotate-180"}`}>
                    <img src={control} alt="arrow" />
                </div>
                <div className="flex gap-x-4 p-3 items-center">
                    <img className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} src={Logo} alt="Logo" />
                    <span className={`${!open && 'scale-0'} text-2xl text-logoColor origin-left font-medium duration-300`}>MATERIO</span>
                </div>
                <ul className='pt-6'>
                    {sidebarMenu.map((sidebar, index) => (
                        <li key={index} className={`flex  rounded-md p-2 cursor-pointer hover:bg-div hover:text-textWhite text-sidebarColor text-sm items-center gap-x-4`}>
                            <Link className='flex items-center gap-x-4'>
                                <img className='' src={require(`../../Assets/Img/${sidebar.src}.png`)} alt="icons" />
                                <span className={`${!open && "hidden"} text-xl origin-left`}>{sidebar.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
        </div>
    );
}

export default Sidebar;
