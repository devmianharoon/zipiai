"use client";
import Searchbtn from "../../../../components/buttonComp/Searchbtn";
import MovingDirect from "../../../../components/home/MovingDirect";
import Image from "next/image";

type HeroBannerProps = {
  title?: string;
  subtitle?: string;
  description?: string;
};
export default function HeroBannerDirecTv({ data }: { data: HeroBannerProps }) {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat "
        style={{
          backgroundImage: "url('/assets/images/directv/tvHeader.jpeg')",
        }}></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative min-h-[216px] lg:h-full top-[65px] lg:top-0 flex flex-col items-center justify-center text-center text-white px-4 ">
        <h1 className="md:text-[140px] md:leading-[120px] tracking-[-3.6px]  mb-[12px] font-[600] text-white ">
          {/* {data.subtitle} */}
          DirecTV Stream
        </h1>
        <h2 className="text-xl md:text-[120px] font-[600] leading-[56px] tracking-[-1.44px] mb-[45px] text-white">
          {data.title}
        </h2>

        <p className="text-base font-[600] leading-[28px] tracking-[-0.22px] lg:text-[48px] md:text-2xl mb-3 text-white ">
          {data.description}
        </p>
        <p className="text-base font-[600] leading-[28px] tracking-[-0.22px] lg:text-[24px] md:text-2xl mb-3 text-white ">
          Anywhere. Anytime. Any Device. 
        </p>
        <p className="text-base font-[500] leading-[28px] tracking-[-0.22px] lg:text-[16px] md:text-2xl mb-3 text-white ">
          (No Satellite Dish Needed)
        </p>

        <button className="w-46 bg-redish bg-[var(--color-red)] text-white py-2.5 px-2.5  font-[700] text-[16px]   cursor-pointer rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Shop Now
        </button>
        {/* Call Now section absolute */}
        <div className=" h-[185px] w-[372px] md:w-[786px] md:h-[90px]  rounded-[12px] md:-bottom-[8px] -bottom-[295px] p-4 md:py-5 md:px-5 absolute flex flex-col md:flex-row justify-center items-center z-40 left-1/2 -translate-x-1/2  md:gap-8 gap-4 bg-[url('/assets/testspeed.png')] bg-cover bg-left  text-center md:text-left text-[20px] md:text-[48px]">
          <h3 className="text-[var(--color-white)] md:text-[24] text-[20px] md:leading-[32px] leading-[28px] font-[600]">
            Need help? Speak to an authorized DirecTv agent.
            <br /> Call for the latest promotions!
          </h3>
          <button
            onClick={() => window.open(`tel:1800-123-4567`)}
            className="w-[208px] h-[50px] mx-auto  bg-[var(--color-red)] text-white  rounded-full text-base font-medium  transition-colors">
            <div className="flex justify-center items-center gap-2">
              <Image src="/call-w.svg" alt="phone" width={24} height={24} />
              <span className="text-lg font-medium">Call Now</span>
            </div>
          </button>
        </div>
      </div>
      {/* <div className="lg:absolute w-full lg:top-[30px] lg:left-4"> */}
      <MovingDirect />
      {/* </div> */}
    </div>
  );
}
