import Image from "next/image";
import React from "react";
const items = [
  {
    img1: "/assets/images/coin1.png",
    img2: "/assets/images/recom1.png",
    description:
      "Offers the highest download speeds up to 1,200 Mbps with wide availability and no contract requirements, making it deal for high-bandwidth activities like streaming and gaming.",
  },
  {
    img1: "/assets/images/coin2.png",
    img2: "/assets/images/recom2.png",
    description:
      "Provides reliable fiber internet with symmetrical speeds up to 940 Mbps and no data caps, suitable for households multiple users and devices. ",
  },
  {
    img1: "/assets/images/coin3.png",
    img2: "/assets/images/recom3.png",
    description:
      "Offers satellite internet with speeds up to 150 Mbps and no annual contacts, providing a viable option for areas lacking wired connections.",
  },
  {
    img1: "/assets/images/coin4.png",
    img2: "/assets/images/recom4.png",
    description:
      "Provides satellite internet with nationwide coverage and built-in WiFi, suitable for rural areas with limited internet options.",
  },
];
const Recommendation = () => {
  return (
    <section className="w-full h-screen py-8">
      <div className="container mx-auto text-center ">
        <h1 className="py-8">Our Recommendations</h1>
        <div className="w-[1143px]  mx-auto flex justify-center items-center gap-6 py-10">
          {items.map((item, index) => {
            return (
              <div
                className="h-[346px] w-[267px] border border-[var(--color-silver)] rounded-[20px] flex flex-col justify-center items-center p-6  relative "
                key={index}>
                <Image
                  src={item.img1}
                  alt={"recom"}
                  width={60}
                  height={63}
                  className="absolute top-[-30px]"
                />
                <Image
                  src={item.img2}
                  alt={"recom"}
                  width={140}
                  height={47}
                  className="py-6"
                />

                <p className="font-[500]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
