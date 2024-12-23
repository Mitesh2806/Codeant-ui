'use client';

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import CodeAnt from '@/public/SigninAnt-1.svg';
const SideNav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="border-b border-[1px] bg-white">
            
            <div className="flex justify-between items-center px-4 py-3 md:flex-col md:justify-between md:h-full">
               <div className=" flex flex-row items-center justify-between gap-2">
                <Image
                    src={CodeAnt}
                    alt="CodeAnt"
                    quality={100}
                    
                />
                <h1 className="text-2xl font-bold">CodeAnt AI</h1>
               </div>

                
                <div className="md:hidden" onClick={handleNav}>
                    {nav ? (
                        <AiOutlineClose className="text-2xl cursor-pointer" />
                    ) : (
                        <AiOutlineMenu className="text-2xl cursor-pointer" />
                    )}
                </div>
            </div>

            
            <div
                className={`${
                    nav ? 'block' : 'hidden'
                } md:hidden bg-gray-100 border-t border-[1px] z-10`}
            >
                <ul className="flex flex-col p-4 space-y-2 ">
                    <li className="hover:bg-gray-200 p-2 rounded">Option 1</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Option 2</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Option 3</li>
                </ul>
            </div>

            
            <div className="hidden md:flex flex-col justify-between h-full px-4 py-3">
                <ul className="space-y-4">
                    <li className="hover:bg-gray-200 p-2 rounded">Option 1</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Option 2</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Option 3</li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
