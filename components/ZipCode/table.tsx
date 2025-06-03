"use client";

import { InternetData, Provider } from "../../data/types/responsetype";
import { X, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Image from "next/image";
import { useState } from "react";
type Props = {
  data: InternetData;
};

export default function InternetComparison(data: Props) {
  const [expandedSection, setExpandedSection] =
    useState<string>("availability");
  const sections = [
    { key: "availability", title: "Availability", field: "available" },
    {
      key: "maxDownloadSpeed",
      title: "Max download speed",
      field: "Speeds_Up_To",
    },
    {
      key: "maxUploadSpeed",
      title: "Max upload speed",
      field: "max_upload_speed",
    },
    {
      key: "startingPrice",
      title: "Starting price",
      field: "Plans_Starting_At",
    },
    { key: "dataCaps", title: "Data caps", field: "Data Caps" },
    { key: "contracts", title: "Contracts", field: "Contract" },
    { key: "bestFor", title: "Best For", field: "Best For" },
  ];
  const toggleSection = (sectionKey: string) => {
    setExpandedSection(expandedSection === sectionKey ? "" : sectionKey);
  };
  const getSectionData = (field: string) => {
    return data.data.providers.map((provider) => ({
      name: provider.ProviderName,
      type: provider.Connection_Type,
      value: provider[field as keyof Provider] as string,
    }));
  };

  return (
  
    <div className="  min-h-screen  mt-[60px] bg-gradient-to-b from-[rgba(var(--color-red--rgb),0.15)] to-[rgba(var(--color-red--rgb),0.05)]">
      <div className=" py-[41px] lg:py-[135px] lg:max-w-6xl lg:mx-auto ">
        <h2 className=" pt-[25px] pb-[41px] text-center ">
        Side By Side Comparison
      </h2>

      {/* Sections for Mobile */}
      <div className="space-y-4 lg:hidden">
        {sections.map((section) => (
          <div key={section.key}>
            {expandedSection === section.key ? (
              /* Expanded Section */
              <div className="bg-white rounded-2xl  ">
                <div className="flex items-center justify-between px-[10px] py-[20px] border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                  <button
                    onClick={() => toggleSection(section.key)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-4 pl-[19px] pt-[21px] pr-[22px] pb-[27px]">
                  {getSectionData(section.field).map((provider, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between  mb-5"
                    >
                      <div className="flex items-center">
                        <p className="font-bold text-black">{provider.name}</p>
                        <p className="font-bold text-black ml-2">
                          ({provider.type})
                        </p>
                      </div>
                      <p className="font-normal text-black">{provider.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Collapsed Section */
              <button
                onClick={() => toggleSection(section.key)}
                className="w-full bg-white rounded-2xl p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h2>
                <Plus className="h-6 w-6 text-red-500" />
              </button>
            )}
          </div>
        ))}
      </div>
      {/* section for desktop */}
      <div className="overflow-x-auto hidden lg:block">
        <table className="w-full text-sm  ">
          <thead className=" text-black font-bold">
            <tr>
              <th className="p-2 font-bold text-[18px] text-black leading-[20px] text-start">
                Feature
              </th>
              {/* Hardcoding providers as per the image */}
              {data.data.providers.map((provider, index) => (
                
                <th
                  key={index}
                  className="p-5 font-bold text-[18px] text-black leading-[20px] text-start"
                >
                  {`${provider.ProviderName} (${provider.Connection_Type})`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Row for Availability */}
            <tr className="text-center  bg-white rounded-xl">
              <td className="font-normal text-[16px] text-start px-[19px] py-[12px] ">
                Availability
              </td>
              {data.data.providers.map((provider, index) => (
                <td
                  key={index}
                  className="font-normal text-[16px] text-start px-[19px] py-[12px]"
                >
                  {provider.available || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Max Download Speed */}
            <tr className="text-center ">
              <td className="font-normal text-[16px] text-start px-[19px] py-[12px]">
                Max Download Speed
              </td>
              {data.data.providers.map((provider, index) => (
                <td
                  key={index}
                  className="font-normal text-[16px] text-start px-[19px] py-[12px]"
                >
                  {provider.Speeds_Up_To || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Max Upload Speed */}
            <tr className="text-center bg-white rounded-xl">
              <td className="font-normal text-[16px] text-start px-[19px] py-[12px]">
                Max Upload Speed
              </td>
              {data.data.providers.map((provider, index) => (
                <td
                  key={index}
                  className="font-normal text-[16px] text-start px-[19px] py-[12px]"
                >
                  {provider.max_upload_speed || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Starting Price */}
            <tr className="text-center ">
              <td className="font-normal text-[16px] text-start px-[19px] py-[12px]">
                Starting Price
              </td>
              {data.data.providers.map((provider, index) => (
                <td
                  key={index}
                  className="font-normal text-[16px] text-start px-[19px] py-[12px]"
                >
                  {provider.Plans_Starting_At || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Data Caps */}
            <tr className="text-center bg-white rounded-xl">
              <td className="font-normal text-[16px] text-start px-[19px] py-[12px]">
                Data Caps
              </td>
              {data.data.providers.map((provider, index) => (
                <td
                  key={index}
                  className="font-normal text-[16px] text-start px-[19px] py-[12px]"
                >
                  {provider["Data Caps"] || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Contracts */}
            <tr className="text-center ">
              <td className="font-normal text-[16px] text-start px-[19px] py-[12px]">
                Contracts
              </td>
              {data.data.providers.map((provider, index) => (
                <td
                  key={index}
                  className="font-normal text-[16px] text-start px-[19px] py-[12px]"
                >
                  {provider.Contract || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Best For */}
            <tr className="text-center bg-white rounded-xl">
              <td className="font-normal text-[16px] text-start px-[19px] py-[12px]">
                Best For
              </td>
              {data.data.providers.map((provider, index) => (
                <td
                  key={index}
                  className="font-normal text-[16px] text-start px-[19px] py-[12px]"
                >
                  {provider["Best For"] || "N/A"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      </div>
      {/* Recoumandtion */}
      <section className="w-full py-8 mt-[60px] lg:mt-[140px] bg-white">
        <div className="container mx-auto text-center">
          <h1 className="md:py-8 py-2 text-2xl font-bold">
            Our Recommendations
          </h1>

          {/* Desktop Flex Cards */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-6 py-10">
            {data.data.Ranks.map((rank, index) => {
              // Find the provider in data.data.providers to get the logo
              const provider = data.data.providers.find(
                (p) => p.ProviderName === rank.ProviderName
              );
              const logo = provider?.logo || "default.png"; // Fallback logo if not found
              const providerType = provider?.Connection_Type || "Unknown";

              return (
                <div
                  key={index}
                  className="h-[346px] w-[267px] border border-[var(--color-silver)] rounded-[20px] flex flex-col  items-center p-6 relative justify-evenly"
                >
                  <Image
                    src={`/assets/images/coin${rank.Rank}.png`}
                    alt={`Rank ${rank.Rank}`}
                    width={60}
                    height={63}
                    className="absolute top-[-30px]"
                  />
                  <Image
                    src={`/assets/logos/${logo}`}
                    alt={rank.ProviderName}
                    width={140}
                    height={47}
                    className="py-6"
                  />
                  <p className="font-[500] text-sm">{rank.Reason}</p>
                  <h3>{providerType}</h3>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel  */}
          <div className="block md:hidden py-6">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
            >
              {data.data.Ranks.map((rank, index) => {
                // Find the provider in data.data.providers to get the logo
                const provider = data.data.providers.find(
                  (p) => p.ProviderName === rank.ProviderName
                );
                const logo = provider?.logo || "default.png"; // Fallback logo if not found

                return (
                  <SwiperSlide key={index} className="py-8">
                    <div className="h-[289px] w-[371px] mx-auto border border-[var(--color-silver)] rounded-[20px] flex flex-col justify-center items-center p-6 relative">
                      <Image
                        src={`/assets/images/coin${rank.Rank}.png`}
                        alt="recom"
                        width={60}
                        height={63}
                        className="absolute top-[-30px] z-50"
                      />
                      <Image
                        src={`/assets/logos/${logo}`}
                        alt="recom"
                        width={140}
                        height={47}
                        className="py-8"
                      />
                      <p className="font-[500] text-sm text-center">
                        {rank.Reason}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
