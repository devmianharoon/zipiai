import Image from "next/image";
import React from "react";

const BannerTwo = () => {
  return (
    <section className="bg-white py-6">
      <div className="  ">
        <div className="text-area  text-center py-12 px-28">
          <h1 className="text-[30px] font-[900] text-black">
            Stay Connected, Anywhere
          </h1>
          <p className="text-[18px] text-black">
            From bustling cities to remote retreats, our satellite internet
            services keep you connected no matter where you are. Experience
            dependable coverage and high-speed access—even off the grid.
          </p>
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/bannerTwo.png"
            alt="cover image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto pb-12"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
