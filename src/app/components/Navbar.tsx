"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#000000] text-white">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <h1 className="text-lg font-bold">Blogger Website</h1>

        {/* Hamburger Icon */}
        <div
          className="sm:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Desktop Links */}
        <ul className="hidden sm:flex sm:items-center sm:space-x-6">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`sm:hidden absolute w-full bg-[#000000] transition-all duration-300 ease-in-out ${
          isOpen ? "top-12 left-0" : "top-[-300px] left-0"
        }`}
      >
        <li className="py-2 px-4 text-center border-b border-gray-700 hover:bg-[#242343]">
          <Link href="/">Home</Link>
        </li>
        <li className="py-2 px-4 text-center border-b border-gray-700 hover:bg-[#242343]">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="py-2 px-4 text-center border-b border-gray-700 hover:bg-[#242343]">
          <Link href="/about">About</Link>
        </li>
        <li className="py-2 px-4 text-center border-b border-gray-700 hover:bg-[#242343]">
          <Link href="/contact">Contact</Link>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;








