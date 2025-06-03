import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-3xl font-bold">
          Pashu
          <span className="text-green-700">Grow</span>
        </a>
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded={isOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} absolute top-full left-0 w-full md:static md:block md:w-auto bg-white shadow-md md:shadow-none rounded-b-md md:rounded-none `} id="navbar-dropdown">
          <ul className="flex flex-col font-semibold uppercase p-4 md:p-0 mt-2 md:mt-0 border border-gray-100 md:border-0 rounded-lg md:rounded-none bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse text-md">
            <li><a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-green-600 md:p-0" aria-current="page">Home</a></li>
            <li><a href="" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:border-0 md:hover:text-green-600 md:p-0 md:hover:bg-transparent">Buy</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:border-0 md:hover:text-green-600 md:p-0 md:hover:bg-transparent">Sell</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:border-0 md:hover:text-green-600 md:p-0 md:hover:bg-transparent">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
