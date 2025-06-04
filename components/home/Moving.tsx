"use client";
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
      className={`lg:absolute lg:bottom-0 lg:left-0 md:h-[130px] md:w-[428px] box-border px-[22px] py-[22px] ${props.bgClass} rounded-[12px] text-[var(--color-white)] mb-[50px] md:mb-0
      lg:md:h-[65px] lg:md:w-[214px] lg:px-[11px] lg:py-[11px] lg:rounded-[6px] lg:mb-[25px]`}>
      <h1 className="text-[20px] font-[500] px-2 pb-[10px] text-[var(--color-white)] lg:text-[10px] lg:px-1 lg:pb-[5px]">
        Moving ? Check for providers.
      </h1>
      <div className="flex flex-col md:flex-row gap-[15px] justify-between items-center lg:gap-[7px]">
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter zip code"
            className="py-[10px] px-[20px] md:w-[230px] w-full rounded-[80px] outline-none border-none bg-primary placeholder:text-[var(--color-silver)] bg-[var(--color-white)] text-[var(--color-silver)]
              lg:py-[5px] lg:px-[10px] lg:md:w-[115px] lg:rounded-[40px] lg:text-[10px]"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Image
            src={"/assets/images/icons/search.png"}
            alt="search"
            height={20}
            width={20}
            className="absolute right-4 top-[22px] transform -translate-y-1/2 text-[var(--color-silver)] text-sm
              lg:right-2 lg:top-[12px] lg:w-[10px] lg:h-[10px]"
          />
        </div>
        <Searchbtn
          text={
            <span className="flex items-center justify-center gap-2 lg:gap-1 lg:text-[10px]">
              <Image
                src={"/assets/images/icons/globe.png"}
                alt="icon"
                height={18}
                width={18}
                className="lg:w-[9px] lg:h-[9px]"
              />
              Submit
            </span>
          }
          wclass="md:w-[140px] w-full lg:md:w-[70px]"
          onClick={handleClick}
          bgColor={`${props.bgClassBtn}`}
          hpclass="h-[48px] lg:h-[24px]"
        />
      </div>
    </div>
  );
}
