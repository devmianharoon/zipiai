"use client";

import { InternetData } from "../../data/types/responsetype";
import Image from "next/image";
type Props = {
  data: InternetData;
};

export default function InternetComparison(data: Props) {
  return (
    // <div className="p-4 max-w-7xl mx-auto">
    //   <h2 className="text-2xl font-bold mb-6 text-center">
    //     Side By Side Comparison Table
    //   </h2>

    //   <div className="overflow-x-auto">
    //     <table className="w-full text-sm border border-gray-300">
    //       <thead className="bg-bluish text-white">
    //         <tr>
    //           <th className="p-2">Provider</th>
    //           <th className="p-2">Type</th>
    //           <th className="p-2">Max Speed</th>
    //           <th className="p-2">Starting Price</th>
    //           <th className="p-2">Data Caps</th>
    //           <th className="p-2">Contract</th>
    //           <th className="p-2">Best For</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.data.providers.map((provider : Provider , index) => (
    //           <tr key={index} className="text-center border-t">
    //             <td className="p-2 font-semibold">{provider.ProviderName}</td>
    //             <td className="p-2">{provider.Connection_Type}</td>
    //             <td className="p-2">{provider.Speeds_Up_To}</td>
    //             <td className="p-2">{provider.Plans_Starting_At}</td>
    //             <td className="p-2">{provider["Data Caps"]}</td>
    //             <td className="p-2">{provider.Contract}</td>
    //             <td className="p-2">{provider["Best For"]}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>

    //   <div className="mt-8 space-y-4">
    //   <h2 className="text-2xl font-bold mb-6 text-center">
    //     Recommendations
    //   </h2>
    //     {data.data.Ranks.map((rank) => (
    //       <div
    //         key={rank.Rank}
    //         className="bg-white shadow p-4 rounded border-l-4 border-blue-500"
    //       >
    //         <h3 className="font-semibold text-lg">
    //           #{rank.Rank} - {rank.ProviderName}
    //         </h3>
    //         <p className="text-gray-700 mt-1">{rank.Reason}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 ">Side By Side Comparison</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-300">
          <thead className=" text-black font-bold">
            <tr>
              <th className="p-2">Feature</th>
              {/* Hardcoding providers as per the image */}
              {data.data.providers.map((provider, index) => (
                <th key={index} className="p-2">
                  {`${provider.ProviderName} (${provider.Connection_Type})`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Row for Availability */}
            <tr className="text-center border-t">
              <td className="p-2 font-semibold">Availability</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="p-2">
                  {provider.available || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Max Download Speed */}
            <tr className="text-center border-t">
              <td className="p-2 font-semibold">Max Download Speed</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="p-2">
                  {provider.Speeds_Up_To || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Max Upload Speed */}
            <tr className="text-center border-t">
              <td className="p-2 font-semibold">Max Upload Speed</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="p-2">
                  {provider.max_upload_speed || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Starting Price */}
            <tr className="text-center border-t">
              <td className="p-2 font-semibold">Starting Price</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="p-2">
                  {provider.Plans_Starting_At || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Data Caps */}
            <tr className="text-center border-t">
              <td className="p-2 font-semibold">Data Caps</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="p-2">
                  {provider["Data Caps"] || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Latency */}
            {/* <tr className="text-center border-t">
          <td className="p-2 font-semibold">Latency</td>
          {data.data.providers.map((provider, index) => (
            <td key={index} className="p-2">
              {provider.Latency || "N/A"} 
            </td>
          ))}
        </tr> */}
            {/* Row for Contracts */}
            <tr className="text-center border-t">
              <td className="p-2 font-semibold">Contracts</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="p-2">
                  {provider.Contract || "N/A"}
                </td>
              ))}
            </tr>
            {/* Row for Best For */}
            <tr className="text-center border-t">
              <td className="p-2 font-semibold">Best For</td>
              {data.data.providers.map((provider, index) => (
                <td key={index} className="p-2">
                  {provider["Best For"] || "N/A"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

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
              className="bg-white shadow p-4 rounded border-l-4 border-bluish">
              <div className="flex gap-5 items-center">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  #{rank.Rank} - {rank.ProviderName}
                </h3>
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
                <button
                  className="   text-white border-1 rounded-full p-2 cursor-pointer"
                  onClick={() => window.open(`tel:${number}`)}>
                  <Image src="/call.svg" alt="phone" width={20} height={20} />
                </button>
              </div>
              <p className="text-gray-700 mt-1">{rank.Reason}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
