'use client";'
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
    <div className="absolute bottom-0 left-0 py-10 px-10 flex gap-5">
      <h1 className="text-[30px] font-bold text-primary m-0">Moving ?</h1>
      <input
        type="text"
        placeholder="Zip Code"
        className="py-[10px] px-[20px] rounded-lg outline-none border-none bg-primary placeholder:text-navtext text-navtext"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Searchbtn text={"Submit"} wclass="w-26" onClick={handleClick} />
    </div>
  );
}