import Image from "next/image";
import React from "react";

const Whyus = () => {
  return (
    <section className="w-full flex items-center justify-center pt-72 md:py-28  ">
      <div className="w-[753px] h-[753px] rounded-full opacity-50 bg-[#FFB200] blur-[250px] shrink-0 absolute -left-[600px] z-10 " />
      <div className="container flex justify-center items-center py-4">
        <div className="md:w-[850px] md:h-[470px] text-center py-8">
          <h2 className="leading-[38px] pt-3 pb-8 text-[30px] font-[500] md:text-[42px] md:leading-[52px] ">
            <span className="text-[var(--color-blue)]">Search</span>,{" "}
            <span className="text-[var(--color-red)]">Compare</span>, and{" "}
            <span className="text-[var(--color-silver)]">Choose</span> Internet
            Plans From Top Providers Near You
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center relative">
            {/* Left (or Top) Circle */}
            <div className="circle h-[240px] w-[240px] md:h-[326px] md:w-[326px] rounded-full border border-[#030A1326] bg-white flex justify-center items-center text-center z-10">
              <div className="flex flex-col justify-center items-center gap-[20px]">
                <Image
                  src="/assets/images/icons/circle1.png"
                  alt="circle1"
                  width={56}
                  height={56}
                  className="md:w-[74px] md:h-[74px]"
                />
                <p className="text-sm md:text-base text-center md:px-8 px-6 text-[16px] md:text-[18px] md:leading-[26px] font-[500] leading-[24px]">
                  Search for trusted internet providers near you
                </p>
              </div>
            </div>

            {/* Overlapping Center Circle */}
            <div className="circle h-[240px] w-[240px] md:h-[326px] md:w-[326px] rounded-full border border-[#030A1326] bg-white flex justify-center items-center text-center z-30 -my-[40px] md:-mx-[40px] md:-my-0">
              <div className="flex flex-col justify-center items-center gap-[20px]">
                <Image
                  src="/assets/images/icons/circle2.png"
                  alt="circle2"
                  width={56}
                  height={56}
                  className="md:w-[74px] md:h-[74px]"
                />
                <p className="text-[16px] md:text-[18px] md:leading-[26px] font-[500] leading-[24px] md:text-base text-center md:px-8 px-6">
                  Compare top providers, plans, and prices
                </p>
              </div>
            </div>

            {/* Right (or Bottom) Circle */}
            <div className="circle h-[240px] w-[240px] md:h-[326px] md:w-[326px] rounded-full border border-[#030A1326] bg-white flex justify-center items-center text-center z-10">
              <div className="flex flex-col justify-center items-center gap-[20px]">
                <Image
                  src="/assets/images/icons/circle3.png"
                  alt="circle3"
                  width={56}
                  height={56}
                  className="md:w-[74px] md:h-[74px]"
                />
                <p className="text-[16px] md:text-[18px] md:leading-[26px] font-[500] leading-[24px] md:text-base text-center md:px-10 px-8">
                  Choose the right plan for you and place your order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
