import Image from "next/image";
import React from "react";


const SectionOne = () => {
  return (
    <section className="w-full  bg-primary flex justify-center items-center py-14">
      <div className="container flex justify-center items-center h-[440px] gap-14">
        <div className="img-sec w-[65%] relative h-full">
          <Image
            src="/assets/images/directv/banner1.jpeg"
            alt="cover image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>

        <div className="text-sec w-[35%]">
          <div className="pb-12">
            <h1 className="text-[30px] text-black font-[600] py-6">
              Movies & Entertainment{" "}
            </h1>
            <p className="text-black text-[18px]">
              Enjoy the cinematic experience and the magic of movies in your own
              home. From thrilling blockbusters and heartwarming family
              favorites to unforgettable adventures and timeless classics, every
              night can feel like movie night. Sit back, press play, and let the
              wonder unfold—right from your couch.  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
