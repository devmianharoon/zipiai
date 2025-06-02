"use client";

import Image from "next/image";
import { useState } from "react";
import { Provider } from "../../data/types/responsetype";
import Link from "next/link";
export default function SingleProvider({
  data,
  index,
}: {
  data: Provider;
  index: number;
}) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
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
    "rgba(3, 10, 19, 0.05)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 77, 77, 0.05)",
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
        <div className="flex justify-center items-center py-[25px] lg:py-[45px] lg:pl-[45px] lg:pr-[39px] lg:flex flex-col gap-3 ">
          <Image
            src={`/assets/logos/${data.logo}`}
            alt={data.ProviderName}
            width={146}
            height={46}
          />
          <Link
            href={`tel:${data.contact}`}
            className="bg-[var(--color-red)] text-white py-2.5 px-4 rounded-full text-base font-medium hover:bg-[var(--color-red)]transition-colors"
          >
            <div className="flex justify-center items-center gap-2">
              <Image src="/call-w.svg" alt="phone" width={24} height={24} />
              <span className="text-[10px] font-medium"> {data.contact}</span>
            </div>
          </Link>
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
        <div className=" px-[25px] py-[30px] lg:w-[226px]">
          <button
            onClick={toggleAccordion}
            className="w-full  bg-gray-900 text-white py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
          >
            View plans
          </button>
          
          {/* Accordion Section for Plans */}
          {isAccordionOpen && (
            <div className="mt-4 space-y-3">
              {data.plans.map((plan, i) => (
                <div
                  key={i}
                  className={`border p-4 rounded-lg cursor-pointer ${
                    selectedPlan === i
                      ? "bg-gray-100 border-gray-400"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedPlan(selectedPlan === i ? null : i)}
                >
                  <div className="font-semibold">{plan.plan_name}</div>
                  <div className="text-sm text-gray-600">{plan.Price}</div>

                  {/* Show Plan Details if selected */}
                  {selectedPlan === i && (
                    <div className="mt-2 text-sm text-gray-700">
                      <div>
                        <strong>Speed:</strong> {plan.Speeds}
                      </div>
                      {/* <div><strong>Description:</strong> {plan.description}</div> */}
                    </div>
                  )}
                </div>
              ))}
              {/* Call Now Button */}
              <button
                onClick={() => window.open(`tel:${data.contact}`)}
                className="w-full flex justify-evenly items-center bg-[var(--color-red)]  text-white py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
              >
                <Image src="/call-w.svg" alt="phone" width={24} height={24} />
                Shop Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
