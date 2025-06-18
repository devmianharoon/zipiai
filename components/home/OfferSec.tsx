import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi"; // Heroicons Outline

const OfferSec = () => {
  const cardData = [
    {
      img: "/assets/images/blog3.png",
      heading:
        "Best for high-performance tasks like compeitive gaming, 4K streaming, cloud work, and powering smart homes.  ",
      link: "/",
      title: "Fiber Internet",
      colorC: "text-[var(--color-black)]",
    },
    {
      img: "/assets/images/blog1.png",
      heading:
        "Best for streaming, gaming, and everyday browsing for homes with moderate to heavy internet use",
      link: "/",
      title: "Cable Internet",
      colorC: "text-[var(--color-black)]",
    },
    {
      img: "/assets/images/blog4.png",
      heading:
        "Best for streaming, working from home, and everyday browsing without the need for wired cable or fiber lines",
      link: "/",
      title: "Wireless 5G Internet ",
      colorC: "text-[var(--color-black)]",
    },
    {
      img: "/assets/images/blog2.png",
      heading:
        "Best for basic browsing, email, and social media in rural or remote areas where wired internet isn't available",
      link: "/",
      title: "Satellite Internet ",
      colorC: "text-[var(--color-black)]",
    },
  ];

  return (
    <>
      <section className="w-full text-center py-12 px-2 md:px-0">
        {/* <p className="text-[var(--color-blue)]">What we offer</p> */}
        <h1 className="py-10 text-[38px] leading-[48px] font-[600] md:text-[48px] md:leading-[62px]">
          <span className="text-[var(--color-blue)]">Fast.</span> <span className="text-[var(--color-red)]">Reliable.</span> <br /> Internet Available Everywhere.
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[24px]">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="Blog box-border flex flex-col justify-between items-center 
        h-auto min-w-[280px] md:h-auto md:w-[675px] mx-auto">
                <h2 className={`text-center py-6 ${card.colorC}  `}>
                  {card.title}
                </h2>

                <Image
                  src={card.img}
                  alt={`blog-${index}`}
                  width={372}
                  height={260}
                  className="rounded-[10px] md:w-[675px] md:h-[470px] object-cover"
                />
                <div className="w-[90%] md:w-[560px]">
                  <h3 className="py-4 text-[18px] leading-[26px] md:text-[20px] md:leading-[32px] text-center md:text-center font-[400]">
                    {card.heading}
                  </h3>
                  <div className="flex justify-center items-center gap-2">
                    <Link
                      href={card.link}
                      className="text-[var(--color-blue)] py-2 hover:border-b hover:border-[#FF4D4D] text-[16px] md:text-[18px] font-[500]">
                      Learn More
                    </Link>
                    <HiOutlineChevronRight className="text-[16px] md:text-[18px] text-[var(--color-blue)]" />
                  </div>
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
