"use client";

import Link from "next/link";
import { useState } from "react";
import HeaderMenuContent from "../common/header/HeaderMenuContent";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(true);
  //dummy usage of setnavbar
const abc = setNavbar(false);
console.log(abc);


  // const changeBackground = () => {
  //   if (window.scrollY >= 0) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeBackground);
  // }, []);

  return (
    <header
      className={`header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu hidden md:block bg-white ${
        navbar ? "stricky-fixed " : ""
      }`}>
      <div className="w-full p-0">
        {/* <!-- Ace Responsive Menu --> */}

        <Link href="/" className="navbar_brand float-left hidden md:block">
          <Image
            width={120}
            height={65}
            className="logo1 contain"
            src="/assets/images/hyperlogo.png"
            alt="header-logo.png"
          />
          <Image
            width={120}
            height={65}
            className="logo2 contain"
            src="/assets/images/hyperlogo.png"
            alt="header-logo2.png"
          />
          {/* <span>FindHouse</span> */}
        </Link>
        {/* site logo brand */}

        <nav>
          <HeaderMenuContent />
        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
