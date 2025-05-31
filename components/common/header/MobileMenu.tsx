"use client";
import { useState } from "react";
import MobileMenuContent from "./MobileMenuContent";
import Image from "next/image";
import Button from "../../buttonComp/Button";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="md:hidden border-box bg-[var(--color-white)] h-[50px] flex justify-center items-center ">
      <div className="h-[32px] w-full px-4 flex justify-between items-center">
        <Image
          src={"/assets/images/hyperg1.png"}
          alt={"dd"}
          height={30}
          width={84}
        />
        <div className="flex justify-center items-center gap-4">
          <Image
            src={"/assets/images/headericon.png"}
            alt={"icon"}
            height={20}
            width={20}
          />
          <Button
            href={"/"}
            text="Speed test"
            class="h-[32px] w-[100px] bg-[var(--color-blue)] text-[14px] text-white rounded-[90px] py-[10px] px-[13px]"
          />
          <button
            onClick={toggleMenu}
            className="focus:outline-none cursor-pointer flex flex-col gap-2">
            <Image
              src={"/assets/images/icons/menuicon.png"}
              alt={"icon"}
              height={24}
              width={24}
            />
          </button>
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
