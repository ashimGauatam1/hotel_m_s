import Link from "next/link";
import { Fragment } from "react";

export const Navbar = () => {
  return (
    <Fragment>
     <nav className="bg-gray-800 text-white shadow-lg -mb-20">
        <div className="container mx-auto flex justify-between items-center p-4">
            {/* <!-- Logo and Name --> */}
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 19l-7-7 7-7 7 7-7 7z" />
                </svg>
                <span className="text-2xl font-bold text-teal-400">MySite</span>
            </div>

            {/* <!-- Navigation Links --> */}
            <div className="hidden md:flex space-x-6">
                <a href="#" className="nav-link text-gray-300 hover:text-teal-400">Home</a>
                <a href="#" className="nav-link text-gray-300 hover:text-teal-400">Our Services</a>
                <a href="#" className="nav-link text-gray-300 hover:text-teal-400">About</a>
                <a href="#" className="nav-link text-gray-300 hover:text-teal-400">Contact</a>
            </div>

            {/* <!-- Authentication Buttons --> */}
            <div className="hidden md:flex space-x-4">
                <a href="#" className="btn px-4 py-2 border border-teal-400 rounded-md text-teal-400 hover:bg-teal-400 hover:text-white">Login</a>
                <a href="#" className="btn px-4 py-2 bg-teal-400 rounded-md text-white hover:bg-teal-500">Sign Up</a>
            </div>

            {/* <!-- Mobile Menu Button --> */}
            <div className="md:hidden flex items-center">
                <button id="menu-button" className="text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div id="menu" className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
                <a href="#" className="nav-link text-white text-xl">Home</a>
                <a href="#" className="nav-link text-white text-xl">Our Services</a>
                <a href="#" className="nav-link text-white text-xl">About</a>
                <a href="#" className="nav-link text-white text-xl">Contact</a>
                <a href="#" className="btn px-4 py-2 border border-teal-400 rounded-md text-teal-400 hover:bg-teal-400 hover:text-white">Login</a>
                <a href="#" className="btn px-4 py-2 bg-teal-400 rounded-md text-white hover:bg-teal-500">Sign Up</a>
            </div>
        </div>
    </nav>
    </Fragment>
  );
};
