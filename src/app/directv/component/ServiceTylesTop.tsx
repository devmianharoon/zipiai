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
    buttonText: "Sign up",
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
    buttonText: "Start free trial",
    badge: {
      label: "Starting at",
      price: "$34.99",
      subtext: "/mo+tax",
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
    buttonText: "Shop now",
    badge: null,
  },
];

export default function ServiceTilesTop  () {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">
          Stream your way. No annual contract.
          <br />
          Cancel anytime.
        </h1>
        <p className="text-lg text-[#0a2540]">
          Choose which DIRECTV service works best for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceTilesData.map((tile) => (
          <div
            key={tile.id}
            className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col"
          >
            <div className="h-48 bg-blue-500 relative">
              <Image
                src={tile.image}
                alt={tile.title}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              {tile.badge && (
                <div className="absolute top-4 left-4 bg-yellow-400 px-3 py-1 rounded">
                  <p className="text-sm font-medium">{tile.badge.label}</p>
                  <p className="text-xl font-bold">
                    {tile.badge.price}
                    <span className="text-sm">{tile.badge.subtext}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-bold text-start mb-4">
                  {tile.title}
                </h2>
                <ul className="space-y-2 mb-6">
                  {tile.description.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex gap-[10px]">
                        <Image
                          src={"/assets/verified.svg"}
                          alt="verified"
                          width={22}
                          height={22}
                        />
                        {point}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-auto w-full py-2 px-4 bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-medium rounded-md transition-colors">
                {tile.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
