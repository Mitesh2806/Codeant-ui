'use client';

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import CodeAnt from '@/public/SigninAnt-1.svg';

const SideNav = () => {
    const [sideNavOpen, setSideNavOpen] = useState(false);

    const toggleNav = () => setSideNavOpen(!sideNavOpen);

    return (
        <>
            
            
        </>
    );
};

export default SideNav;
