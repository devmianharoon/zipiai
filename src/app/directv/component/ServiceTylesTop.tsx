import Image from "next/image";
import React from "react";

const ServiceTylesTop = () => {
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
        {/* MyFree DIRECTV Tile */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="h-48 bg-blue-500 relative">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="MyFree DIRECTV"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              MyFree DIRECTV
            </h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span>
                  A selection of popular channels that you can stream - for
                  free!
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span>105+ free TV channels across genres</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span>No bills, no hardware, no nonsense</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-medium rounded-md transition-colors">
              Sign up
            </button>
          </div>
        </div>

        {/* Genre Packs Tile */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="h-48 bg-blue-500 relative">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Genre Packs"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-yellow-400 px-3 py-1 rounded">
              <p className="text-sm font-medium">Starting at</p>
              <p className="text-xl font-bold">
                $34.99<span className="text-sm">/mo+tax</span>
              </p>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Genre Packs</h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span>
                  Built to match the content you love, minus everything else
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span>
                  Options include popular streaming services like ESPN+,
                  Disney+, Hulu Bundle Basic and Max Basic With Ads
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span>Starting at just $34.99/mo. +tax</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-medium rounded-md transition-colors">
              Start free trial
            </button>
          </div>
        </div>

        {/* Signature Packages Tile */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="h-48 bg-blue-500 relative">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Signature Packages"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              Signature Packages
            </h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span>
                  Plans that include local/national sports, plus the
                  entertainment and news you crave. Starting at $84.99/mo. For
                  24 months + taxes and fees
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span>
                  Up to 185 channels including premium network options
                </span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-medium rounded-md transition-colors">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTylesTop;
