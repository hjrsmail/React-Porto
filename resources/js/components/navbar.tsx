import { useState, useRef } from 'react';
import clsx from 'clsx';
import NavLink from './nav-link';
import NavLinkMobile from './nav-link-mobile';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    return (
        <nav className="fixed top-0 w-full z-50 bg-darkk/50 cursor-pointer">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <img
                                className="size-8"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block justify-self-start">
                        <div className="ml-10 flex items-baseline space-x-4 bg-white dark:bg-white/30 px-6 py-1 rounded-xl border border-gray-200">
                            <NavLink href="#home" >Home</NavLink>
                            <NavLink href="#about">About Me</NavLink>
                            <NavLink href="#skills">Skills</NavLink>
                            <NavLink href="#project">Project</NavLink>
                            <NavLink href="#contact">Contact</NavLink>

                            {/* Dropdown */}
                            <div
                                className="relative text-md font-medium"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <span className="cursor-pointer">Other</span>
                                {dropdownOpen && (
                                    <div
                                        ref={dropdownRef}
                                        className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 text-md"
                                    >
                                        <a href="/other/team" className="block px-4 py-2 text-gray-700 hover:bg-yellow-500">Our Team</a>
                                        <a href="/other/history" className="block px-4 py-2 text-gray-700 hover:bg-yellow-500">History</a>
                                        <a href="/other/mission" className="block px-4 py-2 text-gray-700 hover:bg-yellow-500">Mission</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <div className="flex items-center">
                        <ThemeToggle/>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            ) : (
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 border-b border-gray-700">
                        <NavLinkMobile href="/" active={true}>Home</NavLinkMobile>
                        <NavLinkMobile href="#about">About Me</NavLinkMobile>
                        <NavLinkMobile href="#skills">Skills</NavLinkMobile>
                        <NavLinkMobile href="#project">Project</NavLinkMobile>
                        <NavLinkMobile href="#contact">Contact</NavLinkMobile>
                    </div>
                </div>
            )}
        </nav>
    );
}
