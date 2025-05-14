"use client";

import Slider from "react-slick";
import React from "react";
import Image from "next/image";

const imgData = [
  { img: "/assets/logos/1tennessee.png", id: 1 },
  { img: "/assets/logos/3_rivers_communications.png", id: 2 },
  { img: "/assets/logos/3_rivers_telephone_cooperative.png", id: 3 },
  { img: "/assets/logos/4-county_fiber.png", id: 4 },
  { img: "/assets/logos/4net.png", id: 5 },
  { img: "/assets/logos/4siwi.png", id: 6 },
  { img: "/assets/logos/5g-x.png", id: 7 },
];

const Crusal = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-full bg-white flex justify-center items-center">
      <Slider {...settings} className="container mx-auto bg-white">
        {imgData.map((item) => (
          <div
            key={item.id}
            className="h-[100px] flex justify-center items-center px-4">
            <div className="relative h-[75px] w-auto">
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
    </div>
  );
};

export default Crusal;
