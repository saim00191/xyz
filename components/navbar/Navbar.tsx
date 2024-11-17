"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav className="flex items-center md:px-[50px] px-3  justify-between h-20 bg-gray-800 bg-opacity-50 text-white fixed top-0 left-0 w-full z-10">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-xl">
          Blogs<span className="uppercase">tera</span>
        </Link>
      </div>
      <div className="gap-2 flex items-center font-bold">
        <div className="lg:flex hidden">
          <Link
            href="#"
            className="ml-4 text-gray-300 hover:text-white relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A373] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="ml-4 text-gray-300 hover:text-white relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A373] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="ml-4 text-gray-300 hover:text-white relative group"
          >
            Article
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A373] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="ml-4 mr-2  text-gray-300 hover:text-white relative group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A373]  transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 justify-center items-center">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="pl-4 lg:border-l border-gray-300">
              <FaFacebookF className="text-white" />
            </div>
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <FaTwitter className="text-white" />
            </div>
          </Link>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <FaInstagram className="text-white" />
            </div>
          </a>

          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <FaLinkedinIn className="text-white" />
            </div>
          </Link>

          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="pr-4 border-r border-gray-300">
              <FaGithub className="text-white" />
            </div>
          </Link>
        </div>
        <div className="p-2  cursor-pointer">
          <FaSearch className="text-gray-300 hover:text-white" />
        </div>

        <div
          onClick={toggleMenu}
          className="lg:hidden flex  flex-col items-end  space-y-1"
        >
          <div className="w-6 h-1 rounded-full bg-gray-400"></div>
          <div className="w-4 h-1 rounded-full bg-gray-400"></div>
          <div className="w-2 h-1 rounded-full bg-gray-400"></div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-90 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            <FaTimes />
          </button>

          <Link href="#" className="text-white text-xl" onClick={closeMenu}>
            Home
          </Link>
          <Link href="#" className="text-white text-xl" onClick={closeMenu}>
            About
          </Link>
          <Link href="#" className="text-white text-xl" onClick={closeMenu}>
            Article
          </Link>
          <Link href="#" className="text-white text-xl" onClick={closeMenu}>
            Contact Us
          </Link>

          <div className="flex md:hidden space-x-6 justify-center items-center">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white" />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white" />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white" />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white" />
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
