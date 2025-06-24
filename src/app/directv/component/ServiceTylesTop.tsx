"use client";
import Image from "next/image";
import React from "react";

const serviceTilesData = [
  {
    id: 1,
    title: "MyFree DIRECTV",
    image: "/assets/Mask group (1).png",
    description: [
      "A selection of popular channels that you can stream - for free!",
      "105+ free TV channels across genres",
      "No bills, no hardware, no nonsense",
    ],
    buttonText: "Get Started",
    badge: null,
  },
  {
    id: 2,
    title: "Genre Packs",
    image: "/assets/image 3751.png",
    description: [
      "Built to match the content you love, minus everything else",
      "Options include popular streaming services like ESPN+, Disney+, Hulu Bundle Basic and Max Basic With Ads",
      "Starting at just $34.99/mo. +tax",
    ],
    buttonText: "Learn More",
    badge: {
      label: "Starting at",
      price: "$34.99",
      subtext: "/mo",
    },
  },
  {
    id: 3,
    title: "Signature Packages",
    image: "/assets/image 3749.png",
    description: [
      "Plans that include local/national sports, plus the entertainment and news you crave. Starting at $84.99/mo. For 24 months + taxes and fees",
      "Up to 185 channels including premium network options",
    ],
    buttonText: "Shop Now",
    badge: null,
  },
];

export default function ServiceTilesTop() {
  return (
    <>
      <div className="text-center mb-[46px] pt-[160px]">
        <h2 className="text-[120px] leading-[120px] tracking-[-3.6px] font-[600] text-[#030A13] text-center mb-[35px]">
          Get more with Genre Packs & On-Demand. 
        </h2>

        <p className="text-[42px] leading-[52px] tracking-[-0.42px] font-[600] text-[#0B6BDD] text-center mb-[45px] ">
          Freedom to Choose!
        </p>
        <h1 className="text-[42px] leading-[52px] tracking-[-0.84px] font-[600] text-[#030A13] text-center mb-[25px]">
          Build the perfect channel line-up. <br /> Entertainment Your Way!  
        </h1>
        <p className="text-[16px] leading-[26px] tracking-[-0.16px] font-[500]  text-[#030A13] text-center ">
          Get more with DirecTV add-ons and build your perfect line-up.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceTilesData.map((tile) => (
          <div
            key={tile.id}
            className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col">
            <h2
              className="text-[24px] leading-[32px] tracking-[-0.24px] font-[600] pt-[19px] pl-[27px] text-[#030A13] text-start mb-4
">
              {tile.title}
            </h2>
            <div className="h-48  relative">
              <Image
                src={tile.image}
                alt={tile.title}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              {tile.badge && (
                <div className="absolute top-0 left-0 bg-[#FF4D4D] px-[30px] py-7 rounded ">
                  <p className="text-sm font-medium text-white">
                    {tile.badge.label}
                  </p>
                  <p className="text-[24px] font-bold text-white">
                    {tile.badge.price}
                    <span className="text-[24px] text-white">
                      {tile.badge.subtext}
                    </span>
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <ul className="mb-[17px]">
                  {tile.description.map((point, index) => (
                    <li key={index} className="flex items-start ">
                      <div className="flex gap-[10px] items-start text-[16px] leading-[24px] font-[500] text-[#030A13]">
                        <Image
                          src={"/assets/verified.svg"}
                          alt="verified"
                          width={22}
                          height={22}
                          className="mt-1"
                        />
                        {point}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => window.open(`tel:1800-123-4567`)}
                className="mt-auto w-full py-[15px]   font-medium rounded-full transition-colors  bg-black text-white ">
                <div className="flex justify-center items-center gap-2 text-[16px]">
                  <Image
                    src="/call-Icon.svg"
                    alt="phone"
                    width={24}
                    height={24}
                  />
                  {tile.buttonText}
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
