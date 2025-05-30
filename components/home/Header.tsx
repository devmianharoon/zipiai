"use client";

import Link from "next/link";
// import { useState } from "react";
import HeaderMenuContent from "../common/header/HeaderMenuContent";
import Image from "next/image";
import Searchbtn from "../buttonComp/Searchbtn";

const Header = () => {
  // const [navbar, setNavbar] = useState(true);
  // const navbar = true;
  //dummy usage of setnavbar
  // const abc = setNavbar(false);
  // console.log(abc);

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
    <header className={"w-full md:flex justify-center items-center bg-white h-[60px] hidden "}>
      <div className="container  lg:px-12 flex justify-between items-center ">
        {/* <!-- Ace Responsive Menu --> */}

        <Link href="/" className="navbar_brand float-left hidden md:block">
          <Image
            width={112}
            height={40}
            className="logo1 contain"
            src="/assets/images/hyperlogo.png"
            alt="header-logo.png"
          />
          {/* <Image
            width={120}
            height={65}
            className="logo2 contain"
            src="/assets/images/hyperlogo.png"
            alt="header-logo2.png"
          /> */}
          {/* <span>FindHouse</span> */}
        </Link>
        {/* site logo brand */}

        <nav>
          <HeaderMenuContent />
        </nav>

        <div className="hidden md:flex">
          <Searchbtn text="Speed test"  bgColor="bg-redish" wclass="120px"/>
        </div>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
