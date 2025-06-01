import Image from "next/image";
import Link from "next/link";
import React from "react";

const OfferSec = () => {
  return (
    <>
      <section className="w-full text-center py-12">
        <p className="text-[var(--color-blue)]">What we offer</p>
        <h1 className="py-6 text-[38px] md:text-[48px]">
          Fast. Reliable. <br /> Available everywhere.
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28">
            {[
              "/assets/images/blog1.png",
              "/assets/images/blog2.png",
              "/assets/images/blog3.png",
              "/assets/images/blog4.png",
            ].map((src, index) => (
              <div
                key={index}
                className="Blog box-border flex flex-col justify-between items-center 
        h-[381px] w-[372px] md:h-[620px] md:w-[675px] mx-auto">
                <Image
                  src={src}
                  alt={`blog-${index}`}
                  width={372}
                  height={260}
                  className="rounded-[10px] md:w-[675px] md:h-[475px] object-cover"
                />
                <div className="w-[90%] md:w-[460px]">
                  <h3 className="py-4 text-[18px] leading-[26px] md:text-[20px] md:leading-[32px] text-center md:text-left">
                    Cable internet — Good for streaming TV, family entertainment
                  </h3>
                  <Link
                    href="/"
                    className="text-[var(--color-blue)] py-2 hover:border-b hover:border-[var(--color-red)]">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferSec;
