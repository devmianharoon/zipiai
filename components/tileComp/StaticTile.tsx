import Image from "next/image";
import React, { useState } from "react";
type Plan = {
  plan_name: string;
  Speeds: string;
  Price: string;
};

type Provider = {
  category: string;
  backgroundColor: string;
  logo: string;
  ProviderName: string;
  contact: string;
  Speeds_Up_To: string;
  Connection_Type: string;
  available: string;
  Plans_Starting_At: string;
  features: string[];
  plans: Plan[];
};


const StaticTile = ({ data , border}: { data: Provider , border :string}) => {
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
  // };

  return (
    <>
      {/* {data1.map((data, index) => ( */}
      <div
        // key={index}
        className={`mx-auto w-full rounded-xl border ${border} lg:max-w-6xl lg:flex px-5 lg:pt-[25px] py-[15px] ${data.backgroundColor} mt-[25px]`}
      >
        {/* Image Section */}
        <div className="flex items-center p-[10px] lg:px-[15px] flex-col gap-6 min-w-[230px]">
          <Image
            src={`/assets/logos/${data.logo}`}
            alt={data.ProviderName}
            width={100}
            height={30}
          />
          <button
            onClick={() => toggleAccordion}
            className="w-full bg-[var(--color-red)] text-white py-[12px] flex justify-around px-[10px] rounded-full text-base font-medium hover:bg-[var(--color-red)] transition-colors"
          >
            <Image src="/call-w.svg" alt="phone" width={20} height={20} />
            <span className="text-[17px] font-[500]">{data.contact}</span>
          </button>
        </div>

        {/* Speed and Pricing Section */}
        <div className="min-w-[400px] grid grid-cols-2 gap-4 px-[25px] py-[30px] border-b border-t border-[var(--color-silver)] lg:border-l lg:border-t-0 lg:border-b-0 lg:gap-[10px]">
          {data.category === "internet" ? (
            <>
              <div className="flex flex-col">
                <div className="text-base font-[400]">Speed up to</div>
                <h3 className="pb-[23px] pt-[17px] text-[32px] font-semibold">
                  {data.Speeds_Up_To}
                </h3>
                <div className="text-base font-normal">
                  Connection:{" "}
                  <span className="font-semibold">{data.Connection_Type}</span>
                </div>
                <div className="text-base font-normal">
                  Availability:{" "}
                  <span className="font-semibold">{data.available}</span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="flex flex-col">
            <div className="font-[400] text-base mb-1">Plans starting at</div>
            <h3 className="text-[32px] font-semibold pb-[23px] pt-[14px]">
              {data.Plans_Starting_At}
            </h3>
            <div className="text-base font-normal">
              Prices may vary
              <br />
              depending on the plan.
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="py-[30px] border-b border-[var(--color-silver)] lg:border-b-0 lg:flex-1">
          <p className="text-base font-medium mb-[15px]">Overview</p>
          <div className="space-y-1 text-base font-normal">
            {data.features.map((feature, i) => (
              <div key={i} className="flex gap-[10px]">
                <Image
                  src="/assets/verified.svg"
                  alt="verified"
                  width={22}
                  height={22}
                />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Button + Accordion */}
        <div className="lg:w-[226px] lg:my-auto">
          <button
            onClick={ toggleAccordion}
            className="w-full lg:min-w-[226px] lg:min-h-[49px] bg-gray-900 text-white py-[10px] rounded-full text-[15px] font-medium hover:bg-gray-800 transition-colors"
          >
            View Plans
          </button>

          {/* Accordion Section for Plans */}
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
                    }
                  >
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
                className="mt-4 w-full flex justify-center lg:gap-[10px] items-center bg-[var(--color-red)]  text-white py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
              >
                <Image src="/call-w.svg" alt="phone" width={24} height={24} />
                Shop Now
              </button>
            </>
          )}
        </div>
      </div>
      {/* ))} */}
    </>
  );
};

export default StaticTile;
