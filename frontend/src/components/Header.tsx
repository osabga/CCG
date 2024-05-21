import React, { useState } from 'react';
import NeorisLogo from '../assets/NEORIS logo light.png';
import { Link } from 'react-router-dom';
import arrow from '../assets/flecha-hacia-abajo.png';

const Header: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to manage the mobile menu visibility

    return (
        <header>
            <nav className="px-4 lg:px-3 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
                    <Link to="/" className="flex items-center">
                        <img src={NeorisLogo} className="mr-3 h-6 sm:h-9" alt="Neoris Logo" />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            )}
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? "flex" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 lg:justify-end`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-light lg:flex-row lg:space-x-8 lg:mt-0 text-m lg:items-center">
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
                            <li>
                            <button className="admin-button hidden lg:block mr-0">
                            <Link to="/login">
                                Logout
                            </Link>
                        </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
