import React from "react";

import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="w-full  bg-primary flex justify-center items-center py-14">
      <div className="container flex justify-center items-center h-[440px] gap-14">
        <div className="text-sec w-[35%]">
          <div className="pb-12">
            <h1 className="text-[30px] text-black font-[600] py-6">
              Live-Action Sports{" "}
            </h1>
            <p className="text-black text-[18px]">
              Immerse yourself in the action—it&apos;s the next best thing to being
              there. Feel every heart-pounding play, breathtaking win, and
              crushing loss as if you&apos;re in the stands. From buzzer-beaters to
              last-second touchdowns, bring unforgettable moments straight to
              your screen. Don&apos;t miss a second—in the blink of an eye, heroes
              rise and legends fall.
            </p>
          </div>
        </div>

        <div className="img-sec w-[65%] relative h-full">
          <Image
            src="/assets/images/directv/banner1.jpeg"
            alt="cover image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
