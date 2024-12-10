'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold flex items-center">
          <Image
            src="/logo.png"
            alt="Church Logo"
            width={40}
            height={40}
            className="mr-4 bg-blue-800 rounded-3xl text-4xl"
          />
          <Link href="/">Seventh-day Adventist Kiganjo Church</Link>
        </h1>

        {/* Hamburger Button */}
        <button
          className={`md:hidden flex items-center px-3 py-2 rounded text-white focus:outline-none transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span className="block bg-white w-6 h-0.5 mb-1 transition-all transform duration-300"></span>
            <span className="block bg-white w-6 h-0.5 mb-1 transition-all transform duration-300"></span>
            <span className="block bg-white w-6 h-0.5 transition-all transform duration-300"></span>
          </div>
        </button>

        {/* Links */}
        <ul
          className={`md:flex md:space-x-4 absolute md:static top-16 left-0 w-full bg-blue-800 md:bg-transparent md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {['Home', 'About', 'Members', 'Giving', 'Events', 'Beliefs', 'Contact'].map((item) => (
            <li key={item} className="md:my-0 my-2">
              <Link
                href={`/${item.toLowerCase()}`}
                className="block text-center md:text-left py-2 px-4 hover:text-yellow-600"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
