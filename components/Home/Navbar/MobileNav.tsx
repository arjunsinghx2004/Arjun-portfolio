import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';

  return (
    <div>
      {/* Overlay with fade animation */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 z-[100002] bg-black transition-opacity duration-500 ${
          showNav ? 'opacity-70 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Navlinks Sidebar */}
      <div
        className={`text-white fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-cyan-800 flex flex-col justify-center space-y-6 transition-transform duration-500 ${navOpen} z-[100050]`}
      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close Button */}
        <button
          onClick={closeNav}
          aria-label="Close navigation menu"
          className="absolute top-[0.7rem] right-[1.4rem]"
        >
          <CgClose className="sm:w-8 sm:h-8 w-6 h-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
