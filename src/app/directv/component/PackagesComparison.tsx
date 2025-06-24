"use client";

import { useEffect, useState } from "react";
import full_channel_guide from "./../../../../data/full_channel_guide.json";
// import rsn from "./../../../../data/rsn.json";
// import localchannel from "./../../../../data/localchannel.json";
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
      name: "Entertainment",
      tagline: "Must-have sports, news, and entertainment",
      price: "$84",
      cents: ".99",
      period: "/mo",
      details: "for 24 months + taxes & fees",
      fullPrice: "($94.99/mo. w/req'd $10/mo. TV Access Fee)",
      term: "w/24-mo. agmt. Autopay and paperless bill req'd.",
      seeDetails: "See details",
      buttonText: "Subscribe Now",
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
      bgColor: "bg-[rgba(3,10,19,0.01)]",
      cardBorder: "rounded-[20px] border border-[rgba(3,10,19,0.15)]",
    },
    {
      id: "choice",
      name: "CHOICE™",
      tagline: "Our most popular package—best for sports!",
      price: "$89",
      cents: ".99",
      period: "/mo",
      details: "for 24 months + taxes & fees",
      fullPrice:
        "($117.98/mo. w/ req'd $10/mo. TV Access Fee & Regional Sports Fee of up to $17.99/mo.)",
      term: "w/24-mo. agmt. Autopay and paperless bill req'd.",
      seeDetails: "See details",
      buttonText: "Subscribe Now",
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
      bgColor: "bg-[rgba(255,77,77,0.05)]",
      cardBorder: "rounded-[20px] border border-[rgba(255,77,77,0.15)]",
    },
    {
      id: "ultimate",
      name: "ULTIMATE",
      tagline: "Perfect for families & movie-lovers",
      price: "$119",
      cents: ".99",
      period: "/mo",
      details: "for 24 months + taxes & fees",
      fullPrice:
        "($147.98/mo. w/ req'd $10/mo. TV Access Fee & Regional Sports Fee of up to $17.99/mo.)",
      term: "w/24-mo. agmt. Autopay and paperless bill req'd.",
      seeDetails: "See details",
      buttonText: "Subscribe Now",
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
      bgColor: "bg-[rgba(3,10,19,0.01)]",
      cardBorder: "rounded-[20px] border border-[rgba(3,10,19,0.15)]",
    },
    {
      id: "premier",
      name: "PREMIER™",
      tagline: "Get it all—premium networks included!",
      price: "$164",
      cents: ".99",
      period: "/mo",
      details: "for 24 months + taxes & fees",
      fullPrice:
        "($192.98/mo. w/ req'd $10/mo. TV Access Fee & Regional Sports Fee of up to $17.99/mo.)",
      term: "w/24-mo. agmt. Autopay and paperless bill req'd.",
      seeDetails: "See details",
      buttonText: "Subcribe",
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
      bgColor: "bg-[rgba(11,107,221,0.05)]",
      cardBorder: "rounded-[20px] border border-[rgba(3,10,19,0.15)]",
    },
  ],
};
const packageNames = ["ENTERTAINMENT", "CHOICE", "ULTIMATE", "PREMIER"];
export default function PackageComparison() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [zipCode, setZipCode] = useState(Cookies.get("user_zipcode") || "");
  const dispatch = useDispatch<AppDispatch>();
  // Function to check and update zip code from cookies
  useEffect(() => {
    // Poll for cookie changes (optional, if needed)
    const interval = setInterval(() => {
      const newZipCode = Cookies.get("user_zipcode") || "";
      if (newZipCode !== zipCode) {
        setZipCode(newZipCode);
      }
    }, 1000); // Check every 1 second (adjust as needed)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [zipCode]);

  // Fetch data when zipCode changes
  useEffect(() => {
    if (zipCode) {
      dispatch(fetchDirectvByZip(zipCode));
      dispatch(fetchZipData(zipCode));
    }
    return () => {
      dispatch(clearDirectvData());
    };
  }, [dispatch, zipCode]);

  const [withLocalChannels, setWithLocalChannels] = useState(1);
  const zip = useSelector((state: RootState) => state.zip.data);
  const directv = useSelector((state: RootState) => state.directv);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Packages");
  const [sortBy, setSortBy] = useState("");

  return (
    <>
      {/* BreadCrum */}
      {/* Heading Section */}
      <div className="p-5 w-full lg:max-w-6xl lg:mx-auto" id="comparison">
        <h2 className="text-[42px] leading-[52px] tracking-[-0.42px] font-[600] text-[#030A13] text-center">
          {withLocalChannels === 1
            ? "DirecTV Packages"
            : withLocalChannels === 2
            ? "Local Channels"
            : withLocalChannels === 3
            ? "Regional Sports Networks"
            : withLocalChannels === 4
            ? "Full Channel Guide"
            : "Full Channel Guide"}

          {withLocalChannels !== 4 && (
            <>
              {" in"}
              <br />
              <span className="text-[#0B6BDD] text-[42px] leading-[52px] tracking-[-0.42px] font-[600]">
                {`${capitalizeWords(zip?.city ?? "")}, ${capitalizeWords(
                  zip?.state ?? ""
                )} ${zip?.zip}`}
              </span>
            </>
          )}
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 pt-12">
        <div className="flex flex-col lg:flex-row gap-[30px] ">
          <div className="flex items-center  rounded-full border border-gray-300 p-2 h-[50px] w-[624px] ">
            <input
              type="text"
              placeholder="Search by feature, channel name, TV show or package etc."
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-[31px]  w-full outline-none"
            />
            <Image
              src="/search-lg.svg"
              alt="Search"
              width={20}
              height={20}
              className="mr-[15px]"
            />
          </div>
          <div className="relative w-full max-w-[256px] ">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none w-full py-2 px-4 h-[50px] border border-[#D1D5DB] rounded-full text-[#030A13] font-medium text-[16px] leading-[24px] pr-10 cursor-pointer focus:outline-none">
              <option value="Packages">Packages</option>
              <option value="Local Channels">Local Channels</option>
              <option value="Regional Sports">Regional Sports</option>
              <option value="Full Channel Guide">Full Channel Guide</option>
            </select>
            <img
              src="/chevron-down.svg"
              alt="arrow"
              className="pointer-events-none absolute top-[25px] right-3 -translate-y-1/2 w-4 h-4 text-[#0B6BDD]"
            />
          </div>
          <div className="relative w-full max-w-[256px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none w-full py-2 px-4 h-[50px] border border-[#D1D5DB] rounded-full text-[#030A13] font-medium text-[16px] leading-[24px] pr-10 cursor-pointer focus:outline-none">
              <option value="">Sort by</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
            <img
              src="/chevron-down.svg"
              alt="arrow"
              className="pointer-events-none absolute top-[25px] right-3 -translate-y-1/2 w-4 h-4 text-[#0B6BDD]"
            />
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-12">
        {/* Toggle Buttons */}
        <>
          {/* Desktop Button Group */}
          <div className="hidden mx-auto lg:justify-between lg:w-[735px] lg:flex jus rounded-[20px] border border-gray-300 overflow-hidden mb-2 p-[10px] ">
            {[1, 2, 3, 4].map((val) => (
              <button
                key={val}
                className={`pt-[12px] pb-[13px] pl-[27px] pr-[23px] rounded-full text-[18px] font-[700] leading-[20px]  font-salt ${
                  withLocalChannels === val
                    ? "bg-[#0B6BDD] text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setWithLocalChannels(val)}>
                {Object.values(packagesData.toggle)[val - 1]}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="block lg:hidden">
            <button
              className="mb-[10px] w-full flex items-center justify-between px-4 py-3 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsDropdownOpen((prev) => !prev)}>
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
                    }}>
                    {Object.values(packagesData.toggle)[val - 1]}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
        {withLocalChannels === 1 && (
          <div className="text-[16px] text-[#030A13] font-[500] flex items-center gap-2 justify-center pt-[20px] pb-[50px]">
            <span>{packagesData.toggle.toggleText}</span>
            <a
              href="#"
              className="text-[#0B6BDD] font-[500] text-[16px] leading-[26px] tracking-[-0.16px] underline decoration-solid decoration-[auto] underline-offset-[auto]">
              {packagesData.toggle.checkLink}
            </a>
          </div>
        )}
        {/* </div> */}

        {/* Channel Guide (ChannelTable) or Regional Sports (Grid) */}
        {(withLocalChannels === 2 ||
          withLocalChannels === 3 ||
          withLocalChannels === 4) && (
          <div className="mb-8">
            <div className="flex gap-20 items-center  pt-[20px]">
              <h3 className="text-lg font-bold mb-4 pl-[20px]">
                {withLocalChannels === 2
                  ? "Local Channels"
                  : withLocalChannels === 3
                  ? "Regional Sports Networks"
                  : "Full Channel Guide"}
              </h3>
              {withLocalChannels === 3 && (
                <h3 className="text-[24px] font-bold mb-4 text-[var(--color-blue)]">
                  <span>{directv.data?.RSN_Price}</span>
                </h3>
              )}
            </div>
            <div className="h-auto w-auto overflow-x-auto">
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
                      : (full_channel_guide as Channel[]) ?? []
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
                className={`p-6  ${pkg.bgColor} ${pkg.cardBorder} flex flex-col`}>
                <div>
                  <h2 className="text-[32px] font-[600] mb-2">{pkg.name}</h2>
                  <p className="text-[16px] text-[#030A13] font-[500] leading-[24px] tracking-[0.16px]  mb-2">
                    {pkg.tagline}
                  </p>
                  <div></div>
                  <div className="text-2xl font-bold mb-1 text-[var(--color-red)]">
                    {pkg.price}
                    <span className="text-sm">{pkg.cents}</span>
                    <span className="text-xs mb-1">{pkg.period}</span>
                  </div>

                  <p className="text-[14px] text-[#030A13] font-[500] leading-[24px] tracking-[0.14px] mb-2">
                    {pkg.details}
                  </p>
                  <p className="text-[12px] text-[#030A13] font-[500] leading-[20px] tracking-[-0.12px] mb-4">
                    {pkg.fullPrice}
                  </p>
                  <ol className="text-[14px] text-[#030A13]  font-[500] leading-[24px] list-disc list-inside mb-4">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx}>
                        <div className="flex gap-[10px] items-start">
                          <Image
                            src={"/assets/verified.svg"}
                            alt="verified"
                            width={22}
                            height={22}
                            className="mt-1"
                          />
                          <div>
                            {feature.text}
                            {feature.link && (
                              <a
                                href="#"
                                className="ml-1 text-[14px] leading-[24px] font-[500] text-[#0B6BDD] underline decoration-solid decoration-[auto] underline-offset-[auto]">
                                {feature.link}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </ol>
                </div>
                <button
                  className={`w-full py-2 rounded-full text-white font-semibold bg-black mt-auto`}>
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
