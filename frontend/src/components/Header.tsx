import React, { useState } from 'react';
import NeorisLogo from '../assets/NEORIS logo light.png';
import { Link } from 'react-router-dom';
import arrow from '../assets/flecha-hacia-abajo.png';  // Asegúrate de tener esta imagen en tus assets

const Header: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header>
            <nav className="px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src={NeorisLogo} className="mr-3 h-6 sm:h-9" alt="Neoris Logo" />
                    </Link>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-light lg:flex-row lg:space-x-8 lg:mt-0 text-xs lg:items-center">
                            <li>
                                <a href="#" className="flex items-center py-3 pr-4 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Products</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center py-3 pr-4 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Services</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center py-3 pr-4 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">FAQs</a>
                            </li>
                            <li className="relative" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                                <button className="flex items-center py-3 pr-3 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">
                                    Select Language
                                    {showDropdown ? (
                                        <img src={arrow} className="ml-3" alt="Dropdown Arrow" />
                                    ) : null}
                                </button>
                                {showDropdown && (
                                    <ul className="absolute rounded shadow-md py-2 mt-1 z-10 border border-white" >
                                        <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-900">English</a></li>
                                        <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-900">Español</a></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <button className="admin-button">
                            <Link to="/login">
                                Logout
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
