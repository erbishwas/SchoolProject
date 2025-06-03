import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-2xl sm:text-3xl font-bold">
          Pashu<span className="text-green-700">Grow</span>
        </a>

        {/* Nav Links */}
        <div className={`${isOpen ? "block" : "hidden"} absolute top-full left-0 w-full md:static md:block md:w-auto bg-white shadow-md md:shadow-none rounded-b-md md:rounded-none md:flex-grow md:flex md:justify-center`} id="navbar-dropdown">
          <ul className="flex flex-col font-semibold uppercase p-4 md:p-0 mt-2 md:mt-0 border border-gray-100 md:border-0 rounded-lg md:rounded-none bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse text-sm sm:text-md">
            <li><a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-green-600 md:p-0" aria-current="page">Home</a></li>
            <li><a href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:border-0 md:hover:text-green-600 md:p-0 md:hover:bg-transparent">Buy</a></li>
            <li><a href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:border-0 md:hover:text-green-600 md:p-0 md:hover:bg-transparent">Sell</a></li>
            <li><a href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:border-0 md:hover:text-green-600 md:p-0 md:hover:bg-transparent">Contact</a></li>
          </ul>
        </div>

        {/* Profile pic for large screens */}
        <div className="hidden md:block ml-auto">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="rounded-full border-2 border-green-700 object-cover w-10 h-10" />
        </div>

        {/* Small screen: profile pic + menu button container */}
        <div className="flex md:hidden items-center space-x-2 ml-auto">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="rounded-full border-2 border-green-700 object-cover w-8 h-8" />
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer inline-flex items-center p-1.5 w-8 h-8 justify-center text-sm text-black rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded={isOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
