"use client";

import { useState } from "react";
// import Image from "next/image";
import jsondata from "./../../../../data/directv.json";
// type Channel = {
//   channel: string;
//   number: string;
//   logo: string;
// };

const packagesData = {
  toggle: {
    withLocal: "With local channels",
    withoutLocal: "No local channels",
    channelGuide: "Channel Guide",
    supportNetworks: "Regional Sport Networks",
    toggleText: "(Toggle to remove local channels and save $12)",
    checkLink: "Check your local channels here",
  },
  packages: [
    {
      id: "entertainment",
      name: "ENTERTAINMENT",
      tagline: "Must-have sports, news, and entertainment",
      price: "$84",
      cents: ".99",
      period: "/mo.",
      details: "for 24 months + taxes & fees",
      fullPrice: "($94.99/mo. w/req'd $10/mo. TV Access Fee)",
      term: "w/24-mo. agmt. Autopay and paperless bill req'd.",
      seeDetails: "See details",
      buttonText: "Select ENTERTAINMENT",
      features: [
        {
          icon: "check",
          text: "165+ channels, including essentials like AMC, CNN, Disney Channel, ESPN & ESPN2, Nickelodeon & more.",
          link: "See channel lineup",
        },
        { icon: "check", text: "Local channels included, where available" },
        { icon: "check", text: "Special offer for premium networks" },
      ],
      compareLink: "Compare packages",
      color: "bg-blue-800",
      bgColor: "bg-blue-50",
    },
    {
      id: "choice",
      name: "CHOICE™",
      tagline: "Our most popular package—best for sports!",
      price: "$89",
      cents: ".99",
      period: "/mo.",
      details: "for 24 months + taxes & fees",
      fullPrice:
        "($117.98/mo. w/ req'd $10/mo. TV Access Fee & Regional Sports Fee of up to $17.99/mo.)",
      term: "w/24-mo. agmt. Autopay and paperless bill req'd.",
      seeDetails: "See details",
      buttonText: "Select CHOICE",
      features: [
        {
          icon: "check",
          text: "200+ channels, get channels in ENTERTAINMENT, plus specialty sports: ACC Network, Big Ten Network, MLB Network, NBA TV, SEC Network & more.",
          link: "See channel lineup",
        },
        { icon: "check", text: "Local channels included, where available" },
        {
          icon: "check",
          text: "Regional Sports Networks for watching your local teams",
        },
        { icon: "check", text: "Special offer for premium networks" },
      ],
      compareLink: "Compare packages",
      color: "bg-orange-700",
      bgColor: "bg-orange-50",
    },
    {
      id: "ultimate",
      name: "ULTIMATE",
      tagline: "Perfect for families & movie-lovers",
      price: "$119",
      cents: ".99",
      period: "/mo.",
      details: "for 24 months + taxes & fees",
      fullPrice:
        "($147.98/mo. w/ req'd $10/mo. TV Access Fee & Regional Sports Fee of up to $17.99/mo.)",
      term: "w/24-mo. agmt. Autopay and paperless bill req'd.",
      seeDetails: "See details",
      buttonText: "Select ULTIMATE",
      features: [
        {
          icon: "check",
          text: "270+ channels, everything in CHOICE™, plus more sports & movies: CBS Sports Network, Discovery Family, FX Movie Channel, NHL Network, STARZ Encore.",
          link: "See channel lineup",
        },
        { icon: "check", text: "Local channels included, where available" },
        {
          icon: "check",
          text: "Regional Sports Networks for watching your local teams",
        },
        { icon: "check", text: "Special offer for premium networks" },
      ],
      compareLink: "Compare packages",
      color: "bg-blue-900",
      bgColor: "bg-blue-50",
    },
    {
      id: "premier",
      name: "PREMIER™",
      tagline: "Get it all—premium networks included!",
      price: "$164",
      cents: ".99",
      period: "/mo.",
      details: "for 24 months + taxes & fees",
      fullPrice:
        "($192.98/mo. w/ req'd $10/mo. TV Access Fee & Regional Sports Fee of up to $17.99/mo.)",
      term: "w/24-mo. agmt. Autopay and paperless bill req'd.",
      seeDetails: "See details",
      buttonText: "Select PREMIER",
      features: [
        {
          icon: "check",
          text: "340+ channels, everything in ULTIMATE, plus the top-rated premium networks: HBO Max®, Paramount+ with SHOWTIME, STARZ®, and Cinemax®.",
          link: "See channel lineup",
        },
        { icon: "check", text: "Premium networks included" },
        { icon: "check", text: "Local channels included, where available" },
        {
          icon: "check",
          text: "Regional Sports Networks for watching your local teams",
        },
        {
          icon: "check",
          text: "Includes every DIRECTV Sports Pack channel & NFL RedZone from NFL Network",
        },
      ],
      compareLink: "Compare packages",
      color: "bg-purple-800",
      bgColor: "bg-purple-50",
    },
  ],
  tableData: {
    channelGuide: [
      { channel: "ESPN", number: "206", logo: "/assets/nbc.png" },
      { channel: "NBC Sports", number: "220", logo: "/assets/nbc.png" },
      { channel: "MLB Network", number: "213", logo: "/assets/nbc.png" },
    ],
    regionalSportNetworks: [
      {
        channel: "FanDuel Sports Network",
        number: "684",
        logo: "/assets/nbc.png",
      },
      { channel: "NBC Sports Boston", number: "630", logo: "/assets/nbc.png" },
      { channel: "Spectrum SportsNet", number: "691", logo: "/assets/nbc.png" },
    ],
  },
};

export default function PackageComparison() {
  const [withLocalChannels, setWithLocalChannels] = useState(1);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Toggle Buttons */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex rounded-full border border-gray-300 overflow-hidden mb-2">
          {[1, 2, 3, 4].map((val) => (
            <button
              key={val}
              className={`px-6 py-2 text-sm font-medium ${
                withLocalChannels === val
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setWithLocalChannels(val)}
            >
              {Object.values(packagesData.toggle)[val - 1]}
            </button>
          ))}
        </div>
        <div className="text-sm text-gray-700 flex items-center gap-2">
          <span>{packagesData.toggle.toggleText}</span>
          <a href="#" className="text-blue-700 font-medium">
            {packagesData.toggle.checkLink}
          </a>
          <span className="inline-block w-5 h-5 rounded-full border border-gray-400 text-center text-gray-500">
            i
          </span>
        </div>
      </div>

      {/* Channel Grid View */}
      {(withLocalChannels === 3 || withLocalChannels === 4) && (
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">
            {withLocalChannels === 3
              ? "Channel Guide"
              : "Regional Sport Networks"}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {(withLocalChannels === 3
              ? jsondata["10001"].local
              : jsondata["10001"].rsn
            ).map((entry: string, index: number) => {
              const [channel, number] = entry.split("/");
              return (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-50 rounded-lg p-4 shadow-sm"
                >
                  {/* <div className="w-20 h-20 relative mb-2">
                    <Image
                      src={`/logos/${channel}.png`} // e.g., logos/CW.png
                      alt={`${channel} logo`}
                      fill
                      className="object-contain"
                    />
                  </div> */}
                  <h3 className="text-2xl font-medium text-center">{channel}</h3>
                  <p className="text-xl text-gray-500 mt-1">Ch No : {number}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Package Cards */}
      {(withLocalChannels === 1 || withLocalChannels === 2) && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {packagesData.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 rounded-lg shadow-md ${pkg.bgColor} border`}
            >
              <h2 className="text-lg font-bold mb-2">{pkg.name}</h2>
              <p className="text-sm text-gray-700 mb-2">{pkg.tagline}</p>
              <div className="text-2xl font-bold mb-1">
                {pkg.price}
                <span className="text-sm align-top">{pkg.cents}</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">{pkg.period}</p>
              <p className="text-xs text-gray-500 mb-2">{pkg.details}</p>
              <p className="text-xs text-gray-400 italic mb-4">
                {pkg.fullPrice}
              </p>
              <ul className="text-sm mb-4 list-disc list-inside">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    {feature.text}
                    {feature.link && (
                      <a
                        href="#"
                        className="ml-1 text-blue-600 underline text-xs"
                      >
                        {feature.link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded text-white font-semibold ${pkg.color}`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
