"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import HeaderMenuContent from "../common/header/HeaderMenuContent";
import Image from "next/image";
import Searchbtn from "../buttonComp/Searchbtn";

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    
const handleSpeedTestClick = () => {
    if (pathname === "/speed-test") {
      // We're already on the speed-test page, scroll to the section
      const section = document.getElementById("speed-test");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Go to the speed-test page, and scroll after it loads
      router.push("/speed-test#speed-test");
    }
  };  
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
    <header
      className={
        "w-full md:flex justify-center items-center bg-white h-[60px] hidden "
      }>
      <div className="w-[1920px]  lg:px-[138px] flex justify-between items-center ">
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

        
          <HeaderMenuContent />
        

        <div className="hidden md:flex md:justify-center md:items-center gap-3">
          <Searchbtn
            text="Speed Test"
            bgColor="bg-[#0b6bdd]"
            wclass=""
            hpclass="py-[13px] leading-[16px] px-[16px]"
            onClick={handleSpeedTestClick}
          />
          <Image
            src={"/assets/images/headericon.png"}
            alt={"header icon"}
            height={20}
            width={20}
          />
        </div>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
