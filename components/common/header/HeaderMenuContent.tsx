"use client";
import Link from "next/link";


// import Searchbtn from "../../buttonComp/Searchbtn";

const HeaderMenuContent = () => {
  // const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Personal Internet", path: "/business-internet" },
    { name: "Business Internet", path: "/contact" },
    { name: "TV", path: "/tv" },
    { name: "Direct TV", path: "/directv" },
  ];

  return (
    <ul
      id="respMenu"
      className="hidden md:flex gap-8 justify-center items-center  "
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
