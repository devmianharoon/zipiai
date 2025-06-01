"use client";

import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const imgData2 = [
  { img: "/assets/logos/spectrum.png", id: 1 },
  { img: "/assets/logos/verizon.png", id: 2 },
  { img: "/assets/logos/hughesnet.png", id: 3 },
  { img: "/assets/logos/optimum.svg", id: 4 },
  { img: "/assets/logos/frontier.png", id: 5 },
  { img: "/assets/logos/at&t.png", id: 6 },
  { img: "/assets/logos/centurylink.svg", id: 7 },
  { img: "/assets/logos/Astound_RGB.png", id: 8 },
  { img: "/assets/logos/Directv_PreferredDealer (Color).png", id: 9 },
  { img: "/assets/logos/WOW-LOGO(2WHITE)-UPDATED-4-AUG-2021.jpg", id: 10 },
  { img: "/assets/logos/xfinity.svg", id: 11 },
  { img: "/assets/logos/windstream.png", id: 12 },
];

const Crusal = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures window is defined
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // phones
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white text-center py-4">
      <div className="flex justify-center">
        <p className="py-8 p-large w-[90%] md:w-full">
          Hundreds of awards and 8,000+ satisfied customers
        </p>
      </div>

      {isClient && (
        <Slider {...settings} className="w-full mx-auto bg-white overflow-hidden">
          {imgData2.map((item) => (
            <div
              key={item.id}
              className="h-[80px] flex justify-center items-center px-2"
            >
              <div className="relative h-[40px] w-auto">
                <Image
                  src={item.img}
                  alt="logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Crusal;
