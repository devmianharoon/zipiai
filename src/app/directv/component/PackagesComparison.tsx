"use client";

import { useState } from "react";

// JSON data for the packages
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
        {
          icon: "check",
          text: "Local channels included, where available",
        },
        {
          icon: "check",
          text: "Special offer for premium networks",
        },
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
        {
          icon: "check",
          text: "Local channels included, where available",
        },
        {
          icon: "check",
          text: "Regional Sports Networks for watching your local teams",
        },
        {
          icon: "check",
          text: "Special offer for premium networks",
        },
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
        {
          icon: "check",
          text: "Local channels included, where available",
        },
        {
          icon: "check",
          text: "Regional Sports Networks for watching your local teams",
        },
        {
          icon: "check",
          text: "Special offer for premium networks",
        },
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
        {
          icon: "check",
          text: "Premium networks included",
        },
        {
          icon: "check",
          text: "Local channels included, where available",
        },
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
};

export default function PackageComparison() {
  const [withLocalChannels, setWithLocalChannels] = useState(1);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Channel Toggle */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex rounded-full border border-gray-300 overflow-hidden mb-2">
          <button
            className={`px-6 py-2 text-sm font-medium ${
              withLocalChannels === 1
                ? "bg-blue-700 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setWithLocalChannels(1)}>
            {packagesData.toggle.withLocal}
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium ${
              withLocalChannels === 2
                ? "bg-blue-700 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setWithLocalChannels(2)}>
            {packagesData.toggle.withoutLocal}
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium ${
              withLocalChannels === 3
                ? "bg-blue-700 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setWithLocalChannels(3)}>
            {packagesData.toggle.channelGuide}
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium ${
              withLocalChannels === 4
                ? "bg-blue-700 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setWithLocalChannels(4)}>
            {packagesData.toggle.supportNetworks}
          </button>
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

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {packagesData.packages.map((pkg) => (
          <div
            key={pkg.id}
            className="border border-gray-300 rounded-lg overflow-hidden">
            {/* Header */}
            <div className={`${pkg.color} text-white p-4`}>
              <h3 className="font-bold text-lg">{pkg.name}</h3>
            </div>

            {/* Content */}
            <div className={`${pkg.bgColor} p-4 h-full flex flex-col`}>
              <p className="text-gray-800 font-medium mb-4">{pkg.tagline}</p>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-xl">
                    {pkg.cents}
                    {pkg.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{pkg.details}</p>
                <p className="text-sm text-gray-600">{pkg.fullPrice}</p>
                <p className="text-sm text-gray-600">
                  {pkg.term}{" "}
                  <a href="#" className="text-blue-700">
                    {pkg.seeDetails}
                  </a>
                </p>
              </div>

              {/* Divider */}
              <hr className="my-4 border-gray-300" />

              {/* Button */}
              <button className="w-full py-2 px-4 bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-medium rounded-md transition-colors mb-4">
                {pkg.buttonText}
              </button>

              {/* Features */}
              <ul className="space-y-3 mb-4">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <span>{feature.text}</span>
                      {feature.link && (
                        <a href="#" className="block text-blue-700 text-sm">
                          {feature.link}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Compare Link */}
              <div className="mt-auto">
                <a href="#" className="text-blue-700 text-sm">
                  {pkg.compareLink}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 mt-6">
        *New approved residential customers. Device(s) subject to Equipment
        Lease agmt. Early agmt termination fee applies ($20/mo.) & addl fee(s)
        may apply if equip. not returned.
      </p>
    </div>
  );
}
