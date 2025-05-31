"use client";

import { InternetData, Provider } from "../../data/types/responsetype";
import { X, Plus } from "lucide-react";

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
    <div className=" bg-gradient-to-b from-[rgba(var(--color-red--rgb),0.15)] to-[rgba(var(--color-red--rgb),0.05)] min-h-screen p-4 mt-[60px]">
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
                      <p className="font-medium text-black">{provider.value}</p>
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
              <th className="p-2 font-bold text-[18px] text-black leading-[20px] text-start">Feature</th>
              {/* Hardcoding providers as per the image */}
              {data.data.providers.map((provider, index) => (
                <th key={index} className="p-5 font-bold text-[18px] text-black leading-[20px] text-start">
                  {`${provider.ProviderName} (${provider.Connection_Type})`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Row for Availability */}
            <tr className="text-center  bg-white rounded-xl">
              <td className="font-medium text-[16px] text-start px-[19px] py-[22px] ">Availability</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="font-medium text-[16px] text-start px-[19px] py-[22px]">
                  {provider.available || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Max Download Speed */}
            <tr className="text-center ">
              <td className="font-medium text-[16px] text-start px-[19px] py-[22px]">Max Download Speed</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="font-medium text-[16px] text-start px-[19px] py-[22px]">
                  {provider.Speeds_Up_To || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Max Upload Speed */}
            <tr className="text-center bg-white rounded-xl">
              <td className="font-medium text-[16px] text-start px-[19px] py-[22px]">Max Upload Speed</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="font-medium text-[16px] text-start px-[19px] py-[22px]">
                  {provider.max_upload_speed || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Starting Price */}
            <tr className="text-center ">
              <td className="font-medium text-[16px] text-start px-[19px] py-[22px]">Starting Price</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="font-medium text-[16px] text-start px-[19px] py-[22px]">
                  {provider.Plans_Starting_At || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Data Caps */}
            <tr className="text-center bg-white rounded-xl">
              <td className="font-medium text-[16px] text-start px-[19px] py-[22px]">Data Caps</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="font-medium text-[16px] text-start px-[19px] py-[22px]">
                  {provider["Data Caps"] || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Contracts */}
            <tr className="text-center ">
              <td className="font-medium text-[16px] text-start px-[19px] py-[22px]">Contracts</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="font-medium text-[16px] text-start px-[19px] py-[22px]">
                  {provider.Contract || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Best For */}
            <tr className="text-center bg-white rounded-xl">
              <td className="font-medium text-[16px] text-start px-[19px] py-[22px]">Best For</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="font-medium text-[16px] text-start px-[19px] py-[22px]">
                  {provider["Best For"] || "N/A"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Recoumenddations */}
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Recommendations</h2>
        {data.data.Ranks.map((rank) => {
          // Find the provider in data.data.providers to get the logo
          const provider = data.data.providers.find(
            (p) => p.ProviderName === rank.ProviderName
          );
          const logo = provider?.logo || "default.png"; // Fallback logo if not found
          const number = provider?.contact || "default.png"; // Fallback logo if not found

          return (
            <div
              key={rank.Rank}
              className="bg-white shadow p-4 rounded border-l-4 border-bluish flex gap-5"
            >
              <div className="flex gap-2 items-center flex-col">
                <div className="flex items-center justify-between gap-4">
                  {/* <h3 className="font-semibold text-lg ">
                  #{rank.Rank} 
                </h3> */}
                  <div className="relative w-auto h-full">
                    <Image
                      src={`/assets/logos/${logo}`} // Adjust the path as needed
                      alt={`${rank.ProviderName} logo`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-[22px]"
                    />
                  </div>
                </div>
                <button
                  className="flex gap-4   text-white border-1 rounded-full p-2 cursor-pointer"
                  onClick={() => window.open(`tel:${number}`)}
                >
                  <Image src="/call.svg" alt="phone" width={15} height={15} />
                  <span className="text-black text-center">{number}</span>
                </button>
              </div>
              <h3 className="font-semibold text-lg flex items-center">
                #{rank.Rank}
              </h3>
              <p className="text-gray-700 flex items-center ">{rank.Reason}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
