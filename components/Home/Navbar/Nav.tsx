'use client';
import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';    
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => {
            setScrolled(window.scrollY >= 90);
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[10000] w-[90%] lg:w-[80%]">
            <div
                className={`transition-all duration-500 flex items-center justify-between px-6 py-3 rounded-full 
        backdrop-blur-lg border border-white/10 shadow-lg
        ${scrolled ? 'bg-[#0f142ed9] scale-95 shadow-xl' : 'bg-[#0f142eb3] scale-100'}
      `}
            >
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <FaCode className="w-5 h-5 text-black" />
                    </div>
                    <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
                        ARJUN
                    </h1>
                </div>

                {/* NavLinks */}
                <div className="hidden lg:flex items-center space-x-8">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            className="text-base hover:text-cyan-300 text-white font-medium transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    {/* CV Button */}
                    <button className="px-6 py-2.5 text-sm rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-80 hover:font-extrabold hover:text-blue-950 transition duration-300 text-white flex items-center gap-2 shadow-md">
                        <BiDownload className="w-5 h-5" />
                        <span>Download CV</span>
                    </button>

                    {/* Burger Menu */}
                    <HiBars3BottomRight
                        onClick={openNav}
                        className="w-8 h-8 cursor-pointer text-white lg:hidden"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nav;
