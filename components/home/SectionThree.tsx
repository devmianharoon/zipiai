import Image from "next/image";
import React from "react";

const SectionThree = () => {
  return (
    <section className="w-full  bg-primary flex justify-center items-center py-6">
      <div className="container flex justify-center items-center h-[440px] gap-14">
        <div className="img-sec w-[65%] relative h-full">
          <Image
            src="/assets/images/directv/streaming.jpeg"
            alt="cover image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[6px]"
          />
        </div>

        <div className="text-sec w-[35%]">
          <div className="pb-12">
            <h2 className="text-[30px] font-[600] py-6 text-[var(--color-silver)]">
              Streaming TV{" "}
            </h2>
            <p className="text-[18px] font-[400]">
              Watch Anytime, Anywhere. Your favorite entertainment is ready when
              you are—no cords, no limits. Stream live TV, on-demand movies, and
              binge-worthy shows on any device, whether you&apos;re at home or on the
              go. Record what you love and stream it later, anytime, anywhere.
              From blockbuster hits to can&apos;t-miss TV, your next great watch is
              just a tap away. One account. Endless Entertainment. Watch
              Anywhere. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
