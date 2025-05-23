"use client";

import { useEffect, useState } from "react";
// import jsondata from "./../../../../data/directv.json";
import channeldata from "./../../../../data/channels_data_via_internet.json";
import full_channel_guide from "./../../../../data/full_channel_guide.json";
import ChannelTable from "./ChannelTable";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { fetchZipData } from "../../../../store/slices/zipSlice";
import ZipBreadcrumb from "../../../../components/home/Breadcrumb";

const packagesData = {
  toggle: {
    withLocal: "Packages",
    withoutLocal: "Local Channels ",
    supportNetworks: "Regional Sports ",
    channelGuide: "Full Channel Guide",
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
};
const packageNames = ["ENTERTAINMENT", "CHOICE", "ULTIMATE", "PREMIER"];
export default function PackageComparison() {
  const dispatch = useDispatch<AppDispatch>();

  const savedZipCode = Cookies.get("user_zipcode");
  console.log("Saved Zip Code from Cookies:", savedZipCode);
  useEffect(() => {
    const savedZipCode = Cookies.get("user_zipcode");
    if (savedZipCode) {
      console.log("Zip code from cookie:", savedZipCode);
      // Dispatch saved zip code to Redux
      dispatch(fetchZipData(savedZipCode));
    }
  }, [dispatch]);
  const zip = useSelector((state: RootState) => state.zip.data);

  const [withLocalChannels, setWithLocalChannels] = useState(1);

  return (
    <>
      {/* BreadCrum */}
      {savedZipCode && <ZipBreadcrumb zipCode={savedZipCode} />}
      {/* Heading Section */}
      <div className="p-5">
        <h2 className="text-[30px] font-bold text-black text-center">
          {withLocalChannels === 1
            ? "Packages"
            : withLocalChannels === 2
              ? "Local Channels"
              : withLocalChannels === 3
                ? "Regional Sports Networks"
                : withLocalChannels === 4
                  ? "Full Channel Guide"
                  : "Full Channel Guide"}
          {withLocalChannels !== 4 && ` in ${zip?.city} ZipCode ${zip?.zip}`}
        </h2>
      </div>
      {/* Comparison Table */}
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
          {withLocalChannels === 1 && (
            <div className="text-sm text-gray-700 flex items-center gap-2">
              <span>{packagesData.toggle.toggleText}</span>
              <a href="#" className="text-blue-700 font-medium">
                {packagesData.toggle.checkLink}
              </a>
              <span className="inline-block w-5 h-5 rounded-full border border-gray-400 text-center text-gray-500">
                i
              </span>
            </div>
          )}
        </div>

        {/* Channel Guide (ChannelTable) or Regional Sports (Grid) */}
        {(withLocalChannels === 2 ||
          withLocalChannels === 3 ||
          withLocalChannels === 4) && (
          <div className="mb-8">
            <div className="flex gap-20 items-center mb-4">
              <h3 className="text-lg font-bold mb-4">
                {withLocalChannels === 2
                  ? "Local Channels"
                  : withLocalChannels === 3
                    ? "Reginal Sports Networks"
                    : "Full Channel Guide"}
              </h3>
              {withLocalChannels === 3 && (
                <h3 className="text-lg font-bold mb-4">
                  Price <span>17/$</span>
                </h3>
              )}
            </div>
            <div className="h-[700px] w-auto overflow-x-auto">
              <ChannelTable
                channels={
                  withLocalChannels === 4
                    ? full_channel_guide
                    : withLocalChannels === 2
                      ? channeldata
                      : channeldata
                }
                packages={packageNames}
              />
            </div>
          </div>
        )}

        {/* Package Cards */}
        {withLocalChannels === 1 && (
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
    </>
  );
}
