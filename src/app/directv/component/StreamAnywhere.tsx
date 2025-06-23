"use client";
import React from "react";
import Image from "next/image";

function StreamAnywhere() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-primary">
      <div className="mt-[140px] mb-[140px] flex flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[98px] font-[600] leading-[98px] tracking-[-3.92px] text-center text-[#030A13] font-[SF UI Display] stacked-fractions mb-[45px]">
            Stream Anywhere <br />
            Watch Everywhere
          </h1>

          <button
            onClick={() => window.open(`tel:1800-123-4567`)}
            className="w-[208px] h-[50px] mx-auto  bg-[var(--color-red)] text-white  rounded-full text-base font-medium  transition-colors">
            <div className="flex justify-center items-center gap-2">
              <Image src="/call-w.svg" alt="phone" width={24} height={24} />
              <span className="text-lg font-medium">Call Now</span>
            </div>
          </button>
          <div className="flex items-center justify-center gap-[5px] text-[#030A13] ">
            <div className=" p-1 rounded-full flex items-center justify-center">
              <Image src="/call-Icon.svg" alt="phone" width={24} height={24} />
            </div>
            <p className="text-base font-[400] leading-[28px] tracking-[-0.22px] lg:text-[22px] md:text-2xl border-b border-[#030A13]">
              Call now and start watching instantly – no cables required.
            </p>
          </div>s
        </div>
      </div>
    </div>
  );
}

export default StreamAnywhere;
