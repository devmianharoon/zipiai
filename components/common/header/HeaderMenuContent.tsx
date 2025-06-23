"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Define menu items
const menuItems = [
  { name: "Home", path: "/" },
  { name: "Personal Internet", path: "/business-internet" },
  { name: "Business Internet", path: "/contact" },
  { name: "TV", path: "/tv" },
  { name: "Direct TV", path: "/directv" },
];

const HeaderMenuContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul
      id="respMenu"
      className="hidden md:flex gap-8 justify-center items-center"
      data-menu-style="horizontal">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            className="text-[16px] font-[400] leading-[100%] tracking-[0.16px]">
            {item.name}
          </Link>
        </li>
      ))}
      <li>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="flex items-center gap-1 px-4 py-2 text-gray-800 hover:text-blue-600 text-[16px] font-[400] leading-[100%] tracking-[0.16px]">
            Learn More
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`absolute left-0 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-200 transition-all duration-200 z-10 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}>
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Blogs & Articles
                </Link>
              </li>
              <li>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default HeaderMenuContent;
