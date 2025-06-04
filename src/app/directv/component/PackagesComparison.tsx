"use client";

import { useEffect, useState } from "react";
import full_channel_guide from "./../../../../data/full_channel_guide.json";
import ChannelTable from "./ChannelTable";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { fetchZipData } from "../../../../store/slices/zipSlice";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  clearDirectvData,
  fetchDirectvByZip,
} from "../../../../store/slices/directvSlice";
import { Channel } from "../../../../data/types/channelsTypes";
import { capitalizeWords } from "../../../../data/HelperFunction";

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
      bgColor: "bg-[rgba(11,107,221,0.1)]",
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
      color: "bg-[rgba(3, 10, 19, 0.15)]",
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
      color: "bg-[rgba(255, 77, 77, 0.15)]",
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
      color: "bg-[rgba(3, 10, 19, 0.15)]",
      bgColor: "bg-purple-50",
    },
  ],
};
const packageNames = ["ENTERTAINMENT", "CHOICE", "ULTIMATE", "PREMIER"];
export default function PackageComparison() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const savedZipCode = Cookies.get("user_zipcode");
  console.log("Saved Zip Code from Cookies:", savedZipCode);
  useEffect(() => {
    if (savedZipCode) {
      dispatch(fetchDirectvByZip(savedZipCode));
      dispatch(fetchZipData(savedZipCode));
    }
    return () => {
      dispatch(clearDirectvData());
    };
  }, [dispatch, savedZipCode]);
  const zip = useSelector((state: RootState) => state.zip.data);
  const directv = useSelector((state: RootState) => state.directv);
  console.log("Directv Data from Redux:", directv);

  const [withLocalChannels, setWithLocalChannels] = useState(1);

  return (
    <>
      {/* BreadCrum */}
      {/* Heading Section */}
      <div className="p-5 w-full lg:max-w-6xl lg:mx-auto">
        <h2 className="text-[30px] font-bold text-black text-center">
          {withLocalChannels === 1
            ? "DirecTV Packages"
            : withLocalChannels === 2
              ? "Local Channels"
              : withLocalChannels === 3
                ? "Regional Sports Networks"
                : withLocalChannels === 4
                  ? "Full Channel Guide"
                  : "Full Channel Guide"}
          {withLocalChannels !== 4 && ` in ${capitalizeWords(zip?.city ?? "")}, ${capitalizeWords(zip?.state ?? "")}  ${zip?.zip}`}
        </h2>
      </div>
      {/* Comparison Table */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        {/* Toggle Buttons */}
        <>
          {/* Desktop Button Group */}
          <div className="hidden mx-auto lg:justify-evenly lg:w-[735px] lg:flex jus rounded-full border border-gray-300 overflow-hidden mb-2 p-[10px] ">
            {[1, 2, 3, 4].map((val) => (
              <button
                key={val}
                className={`px-6 py-2 text-sm font-medium rounded-full ${
                  withLocalChannels === val
                    ? "bg-[var(--color-blue)] text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setWithLocalChannels(val)}
              >
                {Object.values(packagesData.toggle)[val - 1]}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="block lg:hidden">
            <button
              className="mb-[10px] w-full flex items-center justify-between px-4 py-3 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <span className="p-light">Packages</span>
              <ChevronDown className="h-5 w-5 text-blue-500" />
            </button>

            {/* Dropdown list */}
            {isDropdownOpen && (
              <ul className="border border-gray-300 rounded-lg bg-white shadow-md">
                {[1, 2, 3, 4].map((val) => (
                  <li
                    key={val}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                      withLocalChannels === val
                        ? "bg-[var(--color-blue)] text-white"
                        : "text-black"
                    }`}
                    onClick={() => {
                      setWithLocalChannels(val);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {Object.values(packagesData.toggle)[val - 1]}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
        {withLocalChannels === 1 && (
          <div className="text-sm text-gray-700 flex items-center gap-2 justify-center pt-[20px] pb-[50px]">
            <span>{packagesData.toggle.toggleText}</span>
            <a href="#" className="text-blue-700 font-medium">
              {packagesData.toggle.checkLink}
            </a>
            <span className="inline-block w-5 h-5 rounded-full border border-gray-400 text-center text-gray-500">
              i
            </span>
          </div>
        )}
        {/* </div> */}

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
                    ? "Regional Sports Networks"
                    : "Full Channel Guide"}
              </h3>
              {withLocalChannels === 3 && (
                <h3 className="text-lg font-bold mb-4">
                  Price <span>{directv.data?.RSN_Price}</span>
                </h3>
              )}
            </div>
            <div className="h-[700px] w-auto overflow-x-auto">
              {(withLocalChannels === 2 && !directv.data?.localChnl?.length) ||
              (withLocalChannels === 3 && !directv.data?.RSNs?.length) ? (
                <h3 className="text-center text-lg font-semibold mt-4">
                  No data available
                </h3>
              ) : (
                <ChannelTable
                  channels={
                    withLocalChannels === 2
                      ? (directv.data?.localChnl as Channel[])
                      : withLocalChannels === 3
                        ? (directv.data?.RSNs as Channel[])
                        : withLocalChannels === 4
                          ? (full_channel_guide as Channel[])
                          : ((full_channel_guide as Channel[]) ?? [])
                  }
                  packages={packageNames}
                />
              )}
            </div>
          </div>
        )}

        {/* Package Cards */}
        {withLocalChannels === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {packagesData.packages.map((pkg) => (
              <div
                key={pkg.id}
               
                className={`p-6 rounded-lg ${pkg.bgColor} border border-[rgba(3,10,19,0.15)] flex flex-col`}
              >
                <div>
                  <h2 className="text-lg font-bold mb-2">{pkg.name}</h2>
                <p className="text-sm text-gray-700 mb-2">{pkg.tagline}</p>
                <div className="text-2xl font-bold mb-1 text-[var(--color-red)]">
                  {pkg.price}
                  <span className="text-sm align-top">{pkg.cents}</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">{pkg.period}</p>
                <p className="text-xs text-gray-500 mb-2">{pkg.details}</p>
                <p className="text-xs text-gray-400 italic mb-4">
                  {pkg.fullPrice}
                </p>
                <ol className="text-sm mb-4 list-disc list-inside">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx}>
                      <div className="flex gap-[10px]">
                        <Image
                          src={"/assets/verified.svg"}
                          alt="verified"
                          width={22}
                          height={22}
                        />
                        {feature.text}
                      </div>
                      {feature.link && (
                        <a
                          href="#"
                          className="ml-1 text-blue-600 underline text-xs"
                        >
                          {feature.link}
                        </a>
                      )}
                    </div>
                  ))}
                </ol>
                </div>
                <button
                  className={`w-full py-2 rounded-full text-white font-semibold bg-black mt-auto`}
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
