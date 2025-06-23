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
        style={{ backgroundColor: getBackgroundColor() }}>
        {/* Logo */}
        <div className="mb-6 h-8 relative max-w-[100px] ">
          <Image
            src={`/assets/logos/${data.logo}`}
            alt={data.ProviderName}
            className="h-8 object-contain"
            fill
          />
        </div>

        {/* Speed & Pricing Info */}
        <div className="flex justify-between items-start lg:block">
          <div className="mb-4 lg:flex lg:flex-col  lg:mb-0">
            <p className="text-sm lg:text-[16px] text-[var-(--black)]  font-medium">
              Speed up to
            </p>
            <p className="text-2xl lg:text-[32px] font-semibold text-[var-(--black)] lg:mb-[15px] lg:leading-[52px] tracking-[-7%]">
              {data.Speeds_Up_To}
            </p>
            <div className="lg:hidden">
              <span className="text-sm text-[var-(--black)] font-normal lg:text-base">
                Connection:
              </span>
              <span className="text-sm font-semibold text-[var-(--black)] lg:text-base">
                {data.Connection_Type}
              </span>
            </div>
          </div>

          <div className="mb-6 lg:flex lg:flex-col  lg:mb-0">
            <p className="text-sm lg:text-[16px] text-[var-(--black)] font-medium ">
              Plans starting at
            </p>
            <p className="text-2xl lg:text-[32px] font-semibold text-[var-(--black)] lg:leading-[52px] tracking-[-7%] mb-[15px]">
              {data.Plans_Starting_At}
            </p>
            <div className="lg:hidden">
              <span className=" text-sm text-[var-(--black)]">
                Availability:
              </span>
              <span className="text-sm font-semibold text-gray-900 lg:mb-[40px] ">
                {data.available}
              </span>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-col   lg:mb-[30px]">
            <div>
              <span className=" text-sm text-[var-(--black)]">
                Availability:
              </span>
              <span className="text-sm font-semibold text-gray-900 lg:mb-[40px] ">
                {data.available}
              </span>
            </div>
            <div>
              <span className="text-base text-[var-(--black)] font-normal lg:text-base">
                Connection:
              </span>
              <span className="text-base font-semibold text-[var-(--black)] lg:text-base lg:max-h-3.5">
                {data.Connection_Type}
              </span>
            </div>
          </div>
        </div>

        {/* View Plans Button */}
        <button
          onClick={toggleAccordion}
          className="w-full  bg-gray-900 text-white py-3 rounded-full font-medium transition-colors">
          View plans
        </button>
        <button className="w-full bg-[var(--color-red)] text-white py-3 rounded-full font-medium transition-colors flex justify-center items-center gap-2 mt-[10px]">
          <img src="/call-w.svg" alt="icon" height={16} width={16} />
          <span>Shop Now</span>
        </button>

        {/* Accordion Plans Section */}
        {isAccordionOpen && (
          <>
            <div className="mt-4 space-y-3  rounded  ">
              {data.plans.map((plan, i) => (
                <div
                  key={i}
                  className={`border p-4 rounded-lg cursor-pointer mb-[10px] bg-[rgba(11,107,221,0.1)] ${
                    selectedPlan === i
                      ? " border border-[rgba(3,10,19,0.15)] bg-[rgba(11,107,221,0.1)]"
                      : "border-[rgba(3,10,19,0.15)]"
                  }`}
                  onClick={() =>
                    setSelectedPlan(selectedPlan === i ? null : i)
                  }>
                  <div className="font-semibold">{plan.plan_name}</div>
                  {/* <div className="text-sm text-gray-600">{plan.Price}</div> */}

                  {/* Show Plan Details if selected */}
                  {selectedPlan === i && (
                    <div className="mt-2 text-sm text-black ">
                      <div>
                        <div className="flex">
                          <p>Speed:</p>
                          <p> {plan.Speeds}</p>
                        </div>
                        <div className="flex">
                          <p>Price:</p>
                          <p> {plan.Price}</p>
                        </div>
                      </div>
                      {/* <div><strong>Description:</strong> {plan.description}</div> */}
                    </div>
                  )}
                </div>
              ))}
              {/* Call Now Button */}
            </div>
            <button
              onClick={() => window.open(`tel:${data.contact}`)}
              className="mt-4 w-full flex justify-center lg:gap-[10px] items-center bg-[var(--color-red)]  text-white py-4 rounded-full text-base font-medium">
              <Image src="/call-w.svg" alt="phone" width={24} height={24} />
              Shop Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}
