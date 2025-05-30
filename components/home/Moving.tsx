'use client";';
import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";
import { useState } from "react";

export default function Moving() {
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
    <div className="absolute bottom-0 left-0 h-[130px] w-[428px] box-border px-[22px] py-[22px]  bg-redish rounded-[12px]">
      <h1 className="text-[20px] font-[500] text-primary text-center pb-[10px]">
        Moving ? Check for providers.
      </h1>
      <div className="flex gap-[15px]">
        <input
          type="text"
          placeholder="Enter zip code"
          className="py-[10px] px-[20px] w-[230px] rounded-[80px] outline-none border-none bg-primary placeholder:text-navtext text-navtext"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Searchbtn
          text={"Submit"}
          wclass="w-[140px]"
          onClick={handleClick}
          bgColor="bg-black"
        />
      </div>
    </div>
  );
}
