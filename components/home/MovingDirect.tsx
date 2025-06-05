"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import Searchbtn from "../buttonComp/Searchbtn";
import { useRouter } from "next/navigation";

export default function MovingDirect() {
  const [zipCode, setZipCode] = useState("");
  const router = useRouter();

  const handleClick = () => {
    if (zipCode.trim()) {
      // 1. Set cookie
      Cookies.set("user_zipcode", zipCode);
      router.push(`/directv`);

      // 2. Scroll to the element with id "comparison"
      // const comparisonElement = document.getElementById("comparison");
      // if (comparisonElement) {
      //   comparisonElement.scrollIntoView({ behavior: "smooth" });
      // }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && zipCode.trim()) {
      handleClick(); // Reuse same logic
    }
  };

  return (
    <div
      className={`absolute h-[200px] w-[372px] -bottom-[135px] 
        md:top-[24px] md:left-[16px] md:translate-x-0 md:bottom-auto 
        lg:absolute lg:bottom-0 
        left-1/2 -translate-x-1/2 
        md:h-[122px] md:w-[340px] 
        box-border px-[22px] py-[22px] 
        bg-[var(--color-black)]
        rounded-[12px] text-[var(--color-white)] 
        mb-[60px] md:mb-0 shadow-[0px_4px_50px_rgba(17,17,17,0.05)]`}
    >
      <p className="text-[20px] font-[500] px-2 pb-[10px] text-[var(--color-white)]">
        Moving ? Check for Channels.
      </p>
      <div className="flex flex-col md:flex-row gap-[15px] justify-between items-center">
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter zip code"
            className="py-[10px] px-[20px] md:w-[170px] w-full rounded-[80px] outline-none border-none bg-primary placeholder:text-[var(--color-silver)]  bg-[var(--color-white)] text-[var(--color-silver)]"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Image
            src={"/assets/images/icons/search.png"}
            alt="search icon"
            height={20}
            width={20}
            className="absolute right-4 top-[22px] transform -translate-y-1/2 text-[var(--color-silver)] text-sm"
          />
        </div>
        <Searchbtn
          text={
            <span className="flex items-center justify-center gap-2">
              <Image
                src={"/assets/images/icons/globe.png"}
                alt="icon"
                height={18}
                width={18}
              />
              Submit
            </span>
          }
          wclass="md:w-auto w-full"
          onClick={handleClick}
          bgColor={`bg-[var(--color-red)]`}
          hpclass="py-[14px] px-[28px] font-[18px] leading-[14.4px] font-[500]"
        />
      </div>
    </div>
  );
}
