"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-50 py-3">
      {/* Brand Logo */}
      <Link href="/">
        <div className="flex items-center hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="text-3xl font-bold text-gray-900 drop-shadow-md">Glob</p>
          <p className="text-3xl font-bold text-green-500 -ml-1 drop-shadow-md">Trek.</p>
        </div>
      </Link>

      {/* Hamburger Menu */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden cursor-pointer inline-block"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Background Overlay for Small Screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Navigation Links */}
      <ul
        className={`fixed top-0 right-0 h-screen w-64 bg-white text-bold p-8 transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:static lg:flex lg:flex-row lg:h-auto lg:w-auto lg:bg-transparent lg:translate-x-0 lg:gap-12`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="pb-6 lg:pb-0">
            <Link href={link.href}>
              <span
                className="block py-2 px-4 text-lg rounded-lg transition-all hover:bg-white hover:bg-opacity-20 hover:shadow-lg hover:text-green-500 hover:font-bold lg:text-gray-900 lg:hover:bg-transparent lg:hover:shadow-none"
              >
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="lg:flexCenter hidden lg:block">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
