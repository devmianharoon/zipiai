"use client";

import Image from "next/image";
import { useState } from "react";
import { Provider } from "./../../../../data/types/responsetype";

export default function OtherProvider({
  data,
  index,
}: {
  data: Provider;
  index: number;
}) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const getBackgroundColor = () => {
    const cycleIndex = index % 5;
    switch (cycleIndex) {
      case 0:
        return "rgba(255, 255, 255, 1)";
      case 1:
        return "rgba(3, 10, 19, 0.05)";
      case 2:
      case 3:
        return "rgba(255, 255, 255, 1)";
      case 4:
        return "rgba(255, 77, 77, 0.05)";
      default:
        return "rgba(255, 255, 255, 1)";
    }
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
    setSelectedPlan(null);
  };

  return (
    <div className="w-full">
      <div
        className="rounded-2xl border border-gray-200 p-6"
        style={{ backgroundColor: getBackgroundColor() }}
      >
        {/* Logo */}
        <div className="mb-6 h-8 relative">
          <Image
            src={`/assets/logos/${data.logo}`}
            alt={data.ProviderName}
            className="h-8 object-contain"
            fill
          />
        </div>

        {/* Speed & Pricing Info */}
        <div className="flex justify-between items-start lg:block">
          <div className="mb-4">
            <p className="text-sm lg:text-[16px] text-black mb-1">Speed up to</p>
            <p className="text-2xl lg:text-[32px] font-semibold text-black lg:mb-[30px] lg:leading-[52px] tracking-[-7%]">
              {data.Speeds_Up_To}
            </p>
            <div className="lg:hidden">
              <span className="text-sm text-black font-normal lg:text-base">Connection: </span>
              <span className="text-sm font-semibold text-black lg:text-base">
                {data.Connection_Type}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm lg:text-[16px] text-black mb-1">Plans starting at</p>
            <p className="text-2xl lg:text-[32px] font-semibold text-black lg:leading-[52px] tracking-[-7%]">
              {data.Plans_Starting_At}
            </p>
            <div className="lg:flex">
              <span className="text-sm text-gray-500">Availability: </span>
              <span className="text-sm font-semibold text-gray-900 lg:mb-[40px] ">
                {data.available}
              </span>
            </div>
            <div className="hidden lg:flex">
              <span className="text-sm text-black font-normal lg:text-base">Connection: </span>
              <span className="text-sm font-semibold text-black lg:text-base lg:max-h-3.5">
                {data.Connection_Type}
              </span>
            </div>
          </div>
        </div>

        {/* View Plans Button */}
        <button
          onClick={toggleAccordion}
          className="w-full bg-[var(--color-red)] text-white py-3 rounded-full font-medium transition-colors"
        >
          View plans
        </button>

        {/* Accordion Plans Section */}
        {isAccordionOpen && (
          <div className="mt-4 space-y-3">
            {data.plans.map((plan, i) => (
              <div
                key={i}
                className={`border p-4 rounded-lg cursor-pointer ${
                  selectedPlan === i ? "bg-gray-100 border-gray-400" : "border-gray-200"
                }`}
                onClick={() => setSelectedPlan(selectedPlan === i ? null : i)}
              >
                <div className="font-semibold">{plan.plan_name}</div>
                <div className="text-sm text-gray-600">{plan.Price}</div>

                {selectedPlan === i && (
                  <div className="mt-2 text-sm text-gray-700">
                    <div>
                      <strong>Speed:</strong> {plan.Speeds}
                    </div>
                    {/* You can add more details if needed */}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => window.open(`tel:${data.contact}`)}
              className="w-full flex justify-evenly items-center bg-[var(--color-red)] text-white py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
            >
              <Image src="/call-w.svg" alt="phone" width={24} height={24} />
              Shop Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
