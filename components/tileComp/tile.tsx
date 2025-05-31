"use client";

import Image from "next/image";
import { useState } from "react";
import { Provider } from "../../data/types/responsetype";
export default function SingleProvider({ data }: { data: Provider }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
    setSelectedPlan(null);
  };
  //console for usage
  console.log(selectedPlan);

  // const handlePlanClick = (index: number) => {
  //   setSelectedPlan(selectedPlan === index ? null : index);
  // };

  return (
    // <div className="max-w-6xl mx-auto p-6 rounded-xl border border-gray-200 bg-white">
    //   <div className="grid grid-cols-1 md:grid-cols-4 items-center">
    //     {/* Logo and Rating Section */}
    //     <div className="flex flex-col items-center justify-between gap-4">
    //       <Image
    //         src={`/assets/logos/${data.logo}`}
    //         alt={data.ProviderName}
    //         width={100}
    //         height={100}
    //       />
    //       <button
    //         className="flex p-2 w-full justify-center gap-2 bg-white text-center font-[700] text-[16px] py-2 border border-gray-300 rounded mouse-pointer"
    //         onClick={() => window.open(`tel:${data.contact}`)}>
    //         {/* <Image src={"/call.svg"} alt="phone" width={25} height={25} /> */}
    //         Connect With Sales Agent
    //       </button>
    //       <button
    //         className="flex justify-center p-2 w-full gap-2 bg-white text-center text-2xl font-bold py-2 mouse-pointer"
    //         onClick={() => window.open(`tel:${data.contact}`)}>
    //         <Image src={"/call.svg"} alt="phone" width={25} height={25} />
    //         {data.contact}
    //       </button>
    //     </div>

    //     {/* Pricing Section */}
    //     <div className="p-3">
    //       <h3 className="text-xs font-bold text-gray-600">Plans Starting At</h3>
    //       <div className="flex items-baseline gap-1">
    //         <span className="text-[20px] font-bold text-black">
    //           {data.Plans_Starting_At}
    //         </span>
    //       </div>
    //       <p className="text-xs text-gray-500 mb-3">
    //         Prices may vary depending on the plan
    //       </p>
    //       <h3 className="text-xs font-bold text-gray-600">Speeds Up To</h3>
    //       <div className="flex items-baseline gap-1">
    // <span className="text-2xl font-bold">
    //   {data.Speeds_Up_To.split(" ")[0]}
    // </span>
    // <span className="text-[20px] font-bold">
    //   {data.Speeds_Up_To.split(" ")[1]}
    // </span>
    //       </div>
    //       <div className="space-y-2">
    //         <div className="flex align-center gap-2.5 mt-3">
    //           <div className="text-xs font-extrabold text-gray-600">
    //             Connection:
    //           </div>
    //           <div className="text-xs text-black">{data.Connection_Type}</div>
    //         </div>
    //         <div className="flex align-center gap-2.5">
    //           <div className="text-xs font-extrabold text-gray-600">
    //             Availability:
    //           </div>
    //           <div className="text-xs text-black">{data.available}</div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Features Section */}
    //     <div className="self-baseline p-2.5">
    //       <h3 className="text-2xl font-bold text-gray-600">Feactures</h3>
    //       <ul className="list-disc list-inside text-black space-y-1">
    //         {data.features.map((feature, index) => (
    //           <li key={index}>{feature}</li>
    //         ))}
    //       </ul>
    //     </div>

    //     {/* Connection Info and CTA Section */}
    //     <div className="">
    //       <div className="">
    //         <button
    //           onClick={toggleAccordion}
    //           className="w-full font-[700] text-[16px] bg-redish text-center block py-2 rounded text-white">
    //           View Plans
    //         </button>
    //       </div>
    //       {isAccordionOpen && (
    //         <div className="mt-4">
    //           {data.plans.map((plan, index) => (
    //             <div key={index} className="border-b border-gray-200">
    //               <button
    //                 onClick={() => handlePlanClick(index)}
    //                 className="w-full text-left py-3 px-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
    //               >
    //                 <span className="font-bold text-gray-700">
    //                   {plan.plan_name}
    //                 </span>
    //                 <span className="text-gray-600">{plan.Price}</span>
    //               </button>
    //               {selectedPlan === index && (
    //                 <div className="p-4 bg-white">
    //                   <p>
    //                     <strong>Speeds:</strong> {plan.Speeds}

    //                   </p>
    //                   <p><strong>Price:</strong> {plan.Price}</p>
    //                 </div>
    //               )}
    //             </div>
    //           ))}
    //           {/* Call Now Button */}
    //           <button
    //             className="w-full mt-4 flex justify-center items-center gap-2  text-black font-[700] text-[16px] py-2 cursor-pointer"
    //             onClick={() => window.open(`tel:${data.contact}`)}
    //           >
    //             <Image src="/call.svg" alt="phone" width={25} height={25} />
    //             Call Now
    //           </button>
    //         </div>
    //       )}

    //     </div>
    //   </div>
    // </div>
    <>
      <div className="mx-auto w-full  rounded-xl border border-gray-200   shadow-md bg-gradient-to-b from-[rgba(var(--color-red--rgb),0.15)] to-[rgba(var(--color-red--rgb),0.05)] ">
        {/* Image Section */}
        <div className="flex justify-center items-center py-[25px]">
          <Image
            src={`/assets/logos/${data.logo}`}
            alt={data.ProviderName}
            width={146}
            height={46}
          />
        </div>
        {/* Speed and Pricing Section */}
        <div className="grid grid-cols-2 gap-4 px-[25px] py-[30px] border-b border-t border-[var(--color-silver)]">
          <div>
            <div className="p-light">Speed up to</div>
            <h3>
              <span className="text-2xl font-bold">
                {data.Speeds_Up_To.split(" ")[0]}
              </span>
              <span className="text-[20px] font-bold">
                {data.Speeds_Up_To.split(" ")[1]}
              </span>
            </h3>
            <div className="p-light">
              Connection:{" "}
              <span className="p-light font-semibold">
                {data.Connection_Type}
              </span>
            </div>
            <div className="p-light">
              Availability:{" "}
              <span className="p-light font-semibold">{data.available}</span>
            </div>
          </div>
          <div>
            <div className="p-light mb-1">Plans starting at</div>
            <h3>{data.Plans_Starting_At}</h3>
            <div className="p-light ">
              Prices may vary
              <br />
              depending on the plan.
            </div>
          </div>
        </div>

        {/* overview Section */}
        <div className="px-[25px] py-[30px] border-b border-[var(--color-silver)]">
          <p>Overview</p>
          <div className="list-disc list-inside text-black space-y-1">
            {data.features.map((feature, index) => (
              <div key={index} className="flex  gap-[10px]">
                <Image
                  src={"/assets/verified.svg"}
                  alt="verified"
                  width={22}
                  height={22}
                />
                {feature}
              </div>
            ))}
          </div>
        </div>
        {/* Button */}
        <div className="space-y-3 px-[25px] py-[30px]">
          <button
            onClick={toggleAccordion}
            className="w-full bg-gray-900 text-white py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors">
            View plans
          </button>
          <button className="w-full bg-[var(--color-red)] text-white py-4 rounded-full text-base font-medium hover:bg-[var(--color-red)]transition-colors">
            Connect with agent
          </button>
        </div>
      </div>
    </>
  );
}
