import React, { useState, useEffect } from 'react';
import NeorisLogo from '../assets/NEORIS logo light.png';
import { Link, useNavigate } from 'react-router-dom';
import arrow from '../assets/flecha-hacia-abajo.png';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        const decodedToken: any = jwtDecode(token);
        const userId = decodedToken.id;
        
        localStorage.removeItem('token');
        try {
            await axios.put(`https://neorisprueba.onrender.com/api/v1/logout/${userId}`);
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error('There was an error sending the data', error);
        }
    };

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
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            )}
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? "flex" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 lg:justify-end`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-light lg:flex-row lg:space-x-8 lg:mt-0 text-m lg:items-center">
                            <li>
                                <a href="/Products" className="flex items-center py-3 pr-4 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">{t('products')}</a>
                            </li>
                            <li>
                                <a href="/Services" className="flex items-center py-3 pr-4 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">{t('services')}</a>
                            </li>
                            <li>
                                <a href="/FrequentlyQuestions" className="flex items-center py-3 pr-4 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">{t('faqs')}</a>
                            </li>
                            <li className="relative" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                                <button className="flex items-center py-3 pr-3 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">
                                    {t('select_language')}
                                    {showDropdown ? (
                                        <img src={arrow} className="ml-3" alt="Dropdown Arrow" />
                                    ) : null}
                                </button>
                                {showDropdown && (
                                    <ul className="absolute rounded shadow-md py-2 mt-1 z-10 border border-white">
                                        <li><button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-white hover:bg-blue-900">{t('english')}</button></li>
                                        <li><button onClick={() => changeLanguage('es')} className="block px-4 py-2 text-sm text-white hover:bg-blue-900">{t('spanish')}</button></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                {isLoggedIn ? (
                                    <button onClick={handleLogout} className="admin-button hidden lg:block pb-4 mr-0">
                                        {t('logout')}
                                    </button>
                                ) : (
                                    <button className="admin-button hidden lg:block pb-4 mr-0">
                                        <Link to="/login">
                                            {t('login')}
                                        </Link>
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
