"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Searchbtn from "../../buttonComp/Searchbtn";

const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home Internet", path: "/home-internet" },
    { name: "Business Internet", path: "/business-internet" },
    { name: "DirecTV", path: "/direct-tv" },
    { name: "Help", path: "/contact" },
  ];

  return (
    <ul
      id="respMenu"
      className="hidden md:flex gap-6 text-navtext text-[16px] justify-center items-center "
      data-menu-style="horizontal">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            className={pathname === item.path ? "ui-active" : undefined}>
            {item.name}
          </Link>
        </li>
      ))}

      <li className={`list-inline-item add_listing ${float}`}>
        <Searchbtn text="Check my Speed" />
      </li>
    </ul>
  );
};

export default HeaderMenuContent;
