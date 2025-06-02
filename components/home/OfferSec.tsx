import Image from "next/image";
import Link from "next/link";
import React from "react";

const OfferSec = () => {
  const cardData = [
    {
      img: "/assets/images/blog3.png",
      heading:
        "Best for high-performance tasks like compeitive gaming, 4K streaming, cloud work, and powering smart homes.  ",
      link: "/",
      title: "Fiber Internet",
    },
    {
      img: "/assets/images/blog1.png",
      heading:
        "Best for streaming, gaming, and everyday browsing for homes with moderate to heavy internet use",
      link: "/",
      title: "Cable Internet",
    },
    {
      img: "/assets/images/blog4.png",
      heading:
        "Best for streaming, working from home, and everyday browsing without the need for wired cable or fiber lines",
      link: "/",
      title: "Wireless 5G Internet ",
    },
    {
      img: "/assets/images/blog2.png",
      heading:
        "Best for basic browsing, email, and social media in rural or remote areas where wired internet isn't available",
      link: "/",
      title: "Satellite Internet ",
    },
  ];

  return (
    <>
      <section className="w-full text-center py-12">
        {/* <p className="text-[var(--color-blue)]">What we offer</p> */}
        <h1 className="py-10 text-[38px] md:text-[48px] md:leading-[62px]">
          Fast, Reliable. <br /> Internet Available Everywhere
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="Blog box-border flex flex-col justify-between items-center 
        h-auto w-[372px] md:h-auto md:w-[675px] mx-auto">
                <h2 className="text-center py-6">{card.title}</h2>

                <Image
                  src={card.img}
                  alt={`blog-${index}`}
                  width={372}
                  height={260}
                  className="rounded-[10px] md:w-[675px] md:h-[475px] object-cover"
                />
                <div className="w-[90%] md:w-[560px]">
                  <h3 className="py-4 text-[18px] leading-[26px] md:text-[20px] md:leading-[32px] text-center md:text-center">
                    {card.heading}
                  </h3>
                  <Link
                    href={card.link}
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
