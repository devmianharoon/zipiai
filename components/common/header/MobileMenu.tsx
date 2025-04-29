'use client';
import { useState } from "react";
import MobileMenuContent from "./MobileMenuContent";
import Image from "next/image";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="stylehome1 h0 mega-menu-wrapper">
      <div className="mobile-menu">
        <div className="header stylehome1 flex items-center justify-between p-4 relative">
          {/* Left side - Hamburger */}
          <div className="flex items-center z-50">
            <button
              onClick={toggleMenu}
              className="focus:outline-none cursor-pointer flex flex-col gap-2">
              <span className="block w-4 h-0.5 bg-background"></span>
              <span className="block w-8 h-0.5 bg-background"></span>
              <span className="block w-5 h-0.5 bg-background"></span>
            </button>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            <Image
              width={40}
              height={45}
              className="object-contain"
              src="/assets/images/header-logo2.png"
              alt="FindHouse Logo"
            />
            <span className="text-lg font-semibold">FindHouse</span>
          </div>
        </div>
      </div>

      {/* Sidebar / Offcanvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            ×
          </button>
        </div>
        <MobileMenuContent toggleMenu={toggleMenu} />
      </div>

      {/* Background overlay */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
    </div>
  );
};

export default MobileMenu;
