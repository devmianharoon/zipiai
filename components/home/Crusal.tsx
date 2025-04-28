"use client";

import Slider from "react-slick";

import React from "react";
import Image from "next/image";

const Crusal = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full bg-white flex justify-center items-center">
      <Slider
        {...settings}
        className="container mx-auto flex justify-center items-center bg-white ">
        <div className="h-full flex justify-center items-center">
          <Image
            height={100}
            width={200}
            src={"/assets/logos/1tennessee.png"}
            alt={"image"}
            className=" my-8"
          />
        </div>
        <div className="h-full flex justify-center items-center">
          <Image
            height={100}
            width={200}
            src={"/assets/logos/3_rivers_communications.png"}
            alt={"image"}
            className=" my-8"
          />
        </div>
        <div className="h-full flex justify-center items-center">
          <Image
            height={100}
            width={200}
            src={"/assets/logos/3_rivers_telephone_cooperative.png"}
            alt={"image"}
            className=" my-8"
          />
        </div>
        <div className="h-full flex justify-center items-center">
          <Image
            height={100}
            width={200}
            src={"/assets/logos/4-county_fiber.png"}
            alt={"image"}
            className=" my-8"
          />
        </div>
        <div className="h-full flex justify-center items-center">
          <Image
            height={100}
            width={200}
            src={"/assets/logos/4net.png"}
            alt={"image"}
            className=" my-8"
          />
        </div>
        <div className="h-full flex justify-center items-center">
          <Image
            height={100}
            width={200}
            src={"/assets/logos/4siwi.png"}
            alt={"image"}
            className=" my-8"
          />
        </div>
        <div className="h-full flex justify-center items-center">
          <Image
            height={100}
            width={200}
            src={"/assets/logos/5g-x.png"}
            alt={"image"}
            className=" my-8"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Crusal;
