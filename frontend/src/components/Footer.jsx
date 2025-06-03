import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-green-800 flex flex-col md:flex-row items-center justify-between px-4 py-3 md:px-6 md:py-4">
      <div className="text-center md:text-left font-medium text-base md:text-lg text-white">
        Pashu<span className="text-green-300">Grow</span> |{' '}
        <span className="text-xs text-gray-300">All rights reserved 2025</span>
      </div>

      <div className="mt-2 md:mt-0">
        <ul className="flex gap-4 text-white text-lg md:text-base">
          <li>
            <i className="fa-brands fa-facebook cursor-pointer hover:text-green-300"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram cursor-pointer hover:text-green-300"></i>
          </li>
          <li>
            <i className="fa-brands fa-whatsapp cursor-pointer hover:text-green-300"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
