"use client";

import Image from "next/image";
import { useState } from "react";
import { Provider } from "../../data/types/responsetype";
export default function SingleProvider({ data, index }: { data: Provider; index: number }) {  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
    setSelectedPlan(null);
  };
console.log("selectedPlan", selectedPlan);

  // const handlePlanClick = (index: number) => {
  //   setSelectedPlan(selectedPlan === index ? null : index);
  // };
  // Define the background color sequence
  const backgroundColors = [
    "rgba(3, 10, 19, 0.15)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 77, 77, 0.15)",
  ];

  // Select background color based on index (cyclic)
  const backgroundColor = backgroundColors[index % backgroundColors.length];

  return (
    <>
      <div
        className="mx-auto w-full rounded-xl border border-gray-200 lg:max-w-6xl  lg:flex"
        style={{ backgroundColor }}
      >
        {/* Image Section */}
        <div className="flex justify-center items-center py-[25px] lg:py-[45px] lg:pl-[45px] lg:pr-[39px] lg:flex lg:flex-wrap">
          <Image
            src={`/assets/logos/${data.logo}`}
            alt={data.ProviderName}
            width={146}
            height={46}
          />
        </div>
        {/* Speed and Pricing Section */}
        <div className="grid grid-cols-2 gap-4 px-[25px] py-[30px] border-b border-t border-[var(--color-silver)] lg:border-l lg:border-t-0 lg:border-b-0 lg:gap-[45px]">
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
        <div className="px-[25px] py-[30px] border-b border-[var(--color-silver)] lg:border-b-0">
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
