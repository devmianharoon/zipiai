"use client";
import Image from "next/image";
import { useState } from "react";
import Social from "../common/footer/Social";
import CopyrightFooter from "../common/footer/CopyrightFooter";

const sections = [
  {
    heading: "Quick Links",
    links: [
      "Home",
      "About us",
      "Request a demo",
      "Solutions",
      "Products",
      "Support",
      "Contact us",
      "Pricing",
    ],
  },
  {
    heading: "Products",
    links: ["Cable internet", "Satellite internet", "Fiber optics"],
  },
  { heading: "Blog", links: ["User guide", "Support", "Press info"] },
  {
    heading: "Resources",
    links: ["Blog", "User guide", "Support", "Press info"],
  },
  { heading: "Contact", links: ["+1 26 345-0699", "+1 26 345-0695"] },
  { heading: "Signup Newsletter", links: ["Weekly Digest", "Monthly Offers"] },
];

export default function MobileFooterMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="block md:hidden bg-[rgba(11,107,221,0.1)] px-4 pt-62">
        <div className="w-full flex flex-col justify-between items-center gap-8  border-b border-[var(--color-silver)]">
        <Image
          src={"/assets/images/hyperg1.png"}
          alt={"image"}
          height={57}
          width={160}
        />
        <ul className="flex gap-x-4 pb-6">
          <Social />
        </ul>
      </div>  
      {sections.map((section, index) => {
        const hasLinks = typeof section === "object" && section.links;

        return (
          <div key={index} className="border-b border-gray-300 py-[15px]">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left flex justify-between items-center text-[var(--color-blue)] text-[18px] font-[500] leading-[22px] py-[10px]">
              {typeof section === "string" ? section : section.heading}
              {hasLinks && <span>{openIndex === index ? "⌃" : "⌄"}</span>}
            </button>

            {hasLinks && openIndex === index && (
              <div className="py-4 text-[16px] ">
                {section.links.map((link, linkIdx) => (
                  <p
                    key={linkIdx}
                    className="text-[16px] font-[400] leading-[22px] cursor-pointer py-[10px]">
                    {link}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}

   <div className="py-4">
       <CopyrightFooter />
   </div>
    </div>
  );
}
