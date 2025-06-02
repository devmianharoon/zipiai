'use client";';
import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";
import { useState } from "react";

import Image from "next/image";
interface xyz {
  bgClass: string;
  bgClassBtn: string;
}
export default function Moving(props: xyz) {
  const router = useRouter();
  const [zipCode, setZipCode] = useState("");

  const handleClick = () => {
    if (zipCode.trim()) {
      router.push(`/${zipCode}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && zipCode.trim()) {
      router.push(`/${zipCode}`);
    }
  };

  return (
    <div
      className={`absolute h-[200px] w-[372px] -bottom-[135px] 
  md:top-8 md:left-4 md:translate-x-0 md:bottom-auto 
  lg:absolute lg:bottom-0 
  left-1/2 -translate-x-1/2 
  md:h-[130px] md:w-[428px] 
  box-border px-[22px] py-[22px] 
  ${props.bgClass} 
  rounded-[12px] text-[var(--color-white)] 
  mb-[60px] md:mb-0 shadow-[0px_4px_50px_rgba(17,17,17,0.05)]`}>
      <p className="text-[20px] font-[500] px-2 pb-[10px] text-[var(--color-white)]">
        Moving ? Check for providers.
      </p>
      <div className="flex flex-col md:flex-row gap-[15px] justify-between items-center">
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter zip code"
            className="py-[10px] px-[20px] md:w-[230px] w-full rounded-[80px] outline-none border-none bg-primary placeholder:text-[var(--color-silver)]  bg-[var(--color-white)] text-[var(--color-silver)]"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Image
            src={"/assets/images/icons/search.png"}
            alt="hh"
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
          wclass="md:w-[140px] w-full"
          onClick={handleClick}
          bgColor={`${props.bgClassBtn}`}
          hpclass="h-[48px]"
        />
      </div>
    </div>
  );
}
