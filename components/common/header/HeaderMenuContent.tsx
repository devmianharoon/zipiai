"use client";
import Link from "next/link";


// import Searchbtn from "../../buttonComp/Searchbtn";

const HeaderMenuContent = () => {
  // const pathname = usePathname();

  const menuItems = [
    { name: "About us", path: "/home-internet" },
    { name: "Personal Internet", path: "/business-internet" },
    { name: "Commercial Internet", path: "/contact" },
    { name: "Direct TV", path: "/directv" },
  ];

  return (
    <ul
      id="respMenu"
      className="hidden md:flex gap-10 justify-center items-center  "
      data-menu-style="horizontal">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            className={`text-[16px] font-[400] leading-[100%] tracking-[.16px]`}>
            {item.name}
          </Link>
        </li>
      ))}

      {/* <li className={`list-inline-item add_listing ${float}`}>
        <Searchbtn text="Check my Speed" />
      </li> */}
    </ul>
  );
};

export default HeaderMenuContent;
