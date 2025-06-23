import React from "react";
import Image from "next/image";

function StreamYourWay() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-primary">
      <div className="mt-[140px] flex flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-xl md:text-[98px] font-[600] leading-[56px] tracking-[-1.44px] mb-[45px] ">
            Stream Your Way
          </h1>
          <p className="text-base font-[400] leading-[28px] tracking-[-0.22px] lg:text-[22px] md:text-2xl mb-3 ">
            Watch what you love. Entertainment, sports, and news your way –{" "}
            <br />
             anytime, anywhere, on any device. 
          </p>
        </div>
        <Image
          src="/assets/images/directv/streamway.png"
          alt="phone"
          width={1530}
          height={885}
        />
        <div>
          <ul className="flex gap-[60px] mt-[60px] ">
            <li className="!text-[32px] opacity-[0.25] font-[600] leading-[32px] tracking-[-0.96px] text-center text-[#030A13]">
              Smart TV
            </li>
            <li className="!text-[32px] opacity-[0.25] font-[600] leading-[32px] tracking-[-0.96px] text-center text-[#030A13]">
              Laptop
            </li>
            <li className="!text-[32px] opacity-[0.25] font-[600] leading-[32px] tracking-[-0.96px] text-center text-[#030A13]">
              Tablet
            </li>
            <li className="!text-[32px] opacity-[0.25] font-[600] leading-[32px] tracking-[-0.96px] text-center text-[#030A13]">
              Mobile
            </li>
            <li className="!text-[32px] opacity-[0.25] font-[600] leading-[32px] tracking-[-0.96px] text-center text-[#030A13]">
              Fire Stick
            </li>
            <li className="!text-[32px] opacity-[0.25] font-[600] leading-[32px] tracking-[-0.96px] text-center text-[#030A13]">
              Gemini Air
            </li>
            <li className="!text-[32px] opacity-[0.25] font-[600] leading-[32px] tracking-[-0.96px] text-center text-[#030A13]">
              Roku
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StreamYourWay;
