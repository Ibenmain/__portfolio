import Image from 'next/image';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="text-white container mx-auto font-sans">
            <div className="hidden sm:flex justify-between items-center py-5">
                <Image src="/images/logo.svg" alt="logo" width={80} height={80} />

                <div className="flex items-center space-x-6">
                    <ul className="flex space-x-4">
                        {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                            <li key={item} className="group">
                                <Link href={`${item.toLowerCase()}`} className="relative text-lg">
                                    {item}
                                    <span className="absolute left-1/2 bottom-[-5px] w-0 h-0.5 bg-white transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button>
                        <Image src="/images/darklight.svg" alt="dark/light mode toggle" width={40} height={40} />
                    </button>
                </div>
            </div>

            <div className="sm:hidden flex justify-between items-center p-3 z-50">
                <button onClick={toggleMobileMenu}>
                    <Icon icon="mdi:menu" width={40} height={40} />
                </button>
            </div>
            
            <div
                className={`sm:hidden z-50 fixed top-0 left-0 w-full h-full bg-[#26212B] transition-transform duration-300 transform ${
                    isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="flex justify-between items-center p-5">
                    <Image src="/images/logo.svg" alt="logo" width={60} height={60} />
                    <button onClick={toggleMobileMenu}>
                        <Icon icon="mdi:close" width={40} height={40} />
                    </button>
                </div>
                <ul className="flex flex-col items-center py-5 space-y-4">
                    {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                        <li key={item} className="group">
                            <a
                                href={`${item.toLowerCase()}`}
                                className="relative text-lg"
                                onClick={() => setMobileMenuOpen(false)} // Close menu on item click
                            >
                                {item}
                                <span className="absolute left-1/2 bottom-[-5px] w-0 h-0.5 bg-white transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
