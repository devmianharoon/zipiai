'use client';
import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";
import { useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";

interface MovingProps {
  theme: "light" | "dark";
}

export default function MovingH( props : MovingProps) {
  const router = useRouter();
  const [zipCode, setZipCode] = useState("");

  const saveZipToCookiesAndNavigate = () => {
    if (zipCode.trim()) {
      Cookies.set("user_zipcode", zipCode);
      router.push(`/${zipCode}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveZipToCookiesAndNavigate();
    }
  };

  const isDark = props.theme === "dark";


  return (
    <div
      className={`
        absolute h-[200px]  top-[545px] left-auto right-auto w-[92%] 
        md:top-[24px] md:left-[16px] md:translate-x-0 md:bottom-auto 
        lg:absolute lg:bottom-0 
        md:h-[122px] md:w-[340px] 
        box-border px-[22px] py-[22px] 
        rounded-[12px] mb-[60px] md:mb-0 
        ${isDark ? "bg-[var(--color-black)] text-[var(--color-white)] shadow-[0px_4px_50px_rgba(17,17,17,0.05)]" : "bg-[var(--color-bg-primary)] text-[var(--color-black)]"}
      `}
    >
      <p className={`text-[20px] font-[500] px-2 pb-[10px] ${isDark ? "text-[var(--color-white)]" : "text-[var(--color-black)]"}`}>
        <span className="font-semibold">Moving ?</span> Check for Providers.
      </p>
      <div className="flex flex-col md:flex-row gap-[15px] justify-between items-center">
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter zip code"
            className="py-[10px] px-[20px] md:w-[170px] w-full rounded-[80px] outline-none border-none 
              bg-primary placeholder:text-[var(--color-silver)] 
              bg-[var(--color-white)] text-[var(--color-silver)]"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Image
            src={"/assets/images/icons/search.png"}
            alt="search"
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
          onClick={saveZipToCookiesAndNavigate}
          bgColor={isDark ? "bg-[var(--color-red)]" : "bg-[var(--color-black)]"}
          hpclass="py-[14px] px-[28px] font-[18px] leading-[14.4px] font-[500]"
        />
      </div>
    </div>
  );
}
