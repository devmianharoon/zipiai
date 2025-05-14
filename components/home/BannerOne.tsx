import Image from "next/image";
import React from "react";

const BannerOne = () => {
  return (
    <section className="bg-white py-6">
      <div className="  ">
        <div className="text-area  text-center py-12 px-28">
          <h1 className="text-[30px] font-[900] text-black">
            Connect & Compete Together
          </h1>
          <p className="text-[18px] text-black">
            Level up your game nights with ultra-fast internet speeds and zero
            lag. Whether you &apos; re into casual co-op or competitive gaming,
            our high-speed fiber and broadband connections ensure every moment
            is seamless and fun.
          </p>
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/bannerOne.png"
            alt="cover image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
