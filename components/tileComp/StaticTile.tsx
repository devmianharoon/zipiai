import Image from "next/image";
import React, { useState } from "react";

const data1 = [
  {
    category: "tv",
    backgroundColor: "bg-[#030A130D]",
    logo: "sling_tv.png",
    ProviderName: "xyz",
    contact: "888 564 5552",
    Speeds_Up_To: "150 Mbps",
    Connection_Type: "Satellite",
    available: "100%",
    Plans_Starting_At: "$99.99/mo",
    features: [
      "Unlimited standard data",
      "No annual contracts",
      "Free professional installation",
    ],
    plans: [
      {
        plan_name: "Unlimited Bronze 12",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      {
        plan_name: "Unlimited Bronze 25",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      { plan_name: "Unlimited Gold 50", Speeds: "12 Mbps", Price: "$99.99/mo" },
    ],
  },
  {
    category: "tv",
    backgroundColor: "bg-[#FF4D4D0D]",
    logo: "hulu_tv.png",
    ProviderName: "xyz",
    contact: "888 564 5552",
    Speeds_Up_To: "245 Mbps",
    Connection_Type: "Satellite",
    available: "100%",
    Plans_Starting_At: "$50.00/mo",
    features: [
      "Unlimited standard data",
      "No annual contracts",
      "Free professional installation",
    ],
    plans: [
      {
        plan_name: "Hulu (With Ads) + Live TV",
        Speeds: "12 Mbps",
        Price: "$82.99/mo",
      },
      {
        plan_name: "Unlimited Bronze 25",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      { plan_name: "Unlimited Gold 50", Speeds: "12 Mbps", Price: "$99.99/mo" },
    ],
  },
  {
    category: "tv",
    backgroundColor: "bg-[#030A130D]",
    logo: "fubo_tv.png",
    ProviderName: "xyz",
    contact: "888 564 5552",
    Speeds_Up_To: "2.3 Gbps",
    Connection_Type: "Satellite",
    available: "100%",
    Plans_Starting_At: "$49.99/mo",
    features: [
      "Unlimited standard data",
      "No annual contracts",
      "Free professional installation",
    ],
    plans: [
      {
        plan_name: "Unlimited Bronze 12",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      {
        plan_name: "Unlimited Bronze 25",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      { plan_name: "Unlimited Gold 50", Speeds: "12 Mbps", Price: "$99.99/mo" },
    ],
  },
  {
    category: "tv",
    backgroundColor: "",
    logo: "youtube_tv.jpeg",
    ProviderName: "xyz",
    contact: "888 564 5552",
    Speeds_Up_To: "1 Gbps",
    Connection_Type: "Satellite",
    available: "100%",
    Plans_Starting_At: "$49.99/mo",
    features: [
      "Unlimited standard data",
      "No annual contracts",
      "Free professional installation",
    ],
    plans: [
      {
        plan_name: "Unlimited Bronze 12",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      {
        plan_name: "Unlimited Bronze 25",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      { plan_name: "Unlimited Gold 50", Speeds: "12 Mbps", Price: "$99.99/mo" },
    ],
  },
  {
    category: "tv",
    backgroundColor: "bg-[#030A130D]",
    logo: "DirecTV-Logo.png",
    ProviderName: "xyz",
    contact: "888 564 5552",
    Speeds_Up_To: "150 Mbps",
    Connection_Type: "Satellite",
    available: "100%",
    Plans_Starting_At: "$99.99/mo",
    features: [
      "Unlimited standard data",
      "No annual contracts",
      "Free professional installation",
    ],
    plans: [
      {
        plan_name: "Unlimited Bronze 12",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      {
        plan_name: "Unlimited Bronze 25",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      { plan_name: "Unlimited Gold 50", Speeds: "12 Mbps", Price: "$99.99/mo" },
    ],
  },
  {
    category:"internet",
    backgroundColor: "bg-[#FF4D4D0D]",
    logo: "Xfinity-Logo-2010.png",
    ProviderName: "xyz",
    contact: "888 564 5552",
    Speeds_Up_To: "245 Mbps",
    Connection_Type: "Satellite",
    available: "100%",
    Plans_Starting_At: "$89.99/mo",
    features: [
      "Unlimited standard data",
      "No annual contracts",
      "Free professional installation",
    ],
    plans: [
      {
        plan_name: "Unlimited Bronze 12",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      {
        plan_name: "Unlimited Bronze 25",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      { plan_name: "Unlimited Gold 50", Speeds: "12 Mbps", Price: "$99.99/mo" },
    ],
  },
  {
    category:"internet",
    backgroundColor: "bg-[#030A130D]",
    logo: "spectrum-tv.png",
    ProviderName: "xyz",
    contact: "888 564 5552",
    Speeds_Up_To: "150 Mbps",
    Connection_Type: "Satellite",
    available: "100%",
    Plans_Starting_At: "$99.99/mo",
    features: [
      "Unlimited standard data",
      "No annual contracts",
      "Free professional installation",
    ],
    plans: [
      {
        plan_name: "Unlimited Bronze 12",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      {
        plan_name: "Unlimited Bronze 25",
        Speeds: "12 Mbps",
        Price: "$99.99/mo",
      },
      { plan_name: "Unlimited Gold 50", Speeds: "12 Mbps", Price: "$99.99/mo" },
    ],
  },
];

const StaticTile = () => {
  const [openAccordions, setOpenAccordions] = useState<boolean[]>(
    Array(data1.length).fill(false)
  );
  const [selectedPlans, setSelectedPlans] = useState<(number | null)[]>(
    Array(data1.length).fill(null)
  );

  const toggleAccordion = (index: number) => {
    const updatedOpen = openAccordions.map((_, i) =>
      i === index ? !openAccordions[i] : false
    );
    setOpenAccordions(updatedOpen);

    const updatedPlans = selectedPlans.map((_, i) =>
      i === index && !openAccordions[index] ? null : selectedPlans[i]
    );
    setSelectedPlans(updatedPlans);
  };

  const togglePlan = (outerIndex: number, planIndex: number) => {
    setSelectedPlans((prev) =>
      prev.map((item, i) =>
        i === outerIndex ? (item === planIndex ? null : planIndex) : item
      )
    );
  };

  return (
    <>
      {data1.map((data, index) => (
        <div
          key={index}
          className={`mx-auto w-full rounded-xl border border-gray-200 lg:max-w-6xl lg:flex px-5 lg:pt-[25px] py-[15px] ${data.backgroundColor} mt-[25px]`}>
          {/* Image Section */}
          <div className="flex items-center p-[10px] lg:px-[15px] flex-col gap-6 min-w-[230px]">
            <Image
              src={`/assets/logos/${data.logo}`}
              alt={data.ProviderName}
              width={100}
              height={30}
            />
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full bg-[var(--color-red)] text-white py-[12px] flex justify-around px-[10px] rounded-full text-base font-medium hover:bg-[var(--color-red)] transition-colors">
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
                    <span className="font-semibold">
                      {data.Connection_Type}
                    </span>
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
              onClick={() => toggleAccordion(index)}
              className="w-full lg:min-w-[226px] lg:min-h-[49px] bg-gray-900 text-white py-[10px] rounded-full text-[15px] font-medium hover:bg-gray-800 transition-colors">
              View Plans
            </button>

            {openAccordions[index] && (
              <>
                <div className="mt-4 space-y-3">
                  {data.plans.map((plan, i) => (
                    <div
                      key={i}
                      className={`border p-4 rounded-lg cursor-pointer mb-[10px] ${
                        selectedPlans[index] === i
                          ? "border border-[rgba(3,10,19,0.15)] bg-[rgba(11,107,221,0.1)]"
                          : "border-[rgba(3,10,19,0.15)] bg-white"
                      }`}
                      onClick={() => togglePlan(index, i)}>
                      <div className="font-semibold">{plan.plan_name}</div>

                      {selectedPlans[index] === i && (
                        <div className="mt-2 text-sm text-black">
                          <div className="flex">
                            <p className="w-[60px]">Speed:</p>
                            <p>{plan.Speeds}</p>
                          </div>
                          <div className="flex">
                            <p className="w-[60px]">Price:</p>
                            <p>{plan.Price}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => window.open(`tel:${data.contact}`)}
                  className="mt-4 w-full flex justify-center gap-[10px] items-center bg-[var(--color-red)] text-white py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors">
                  <Image src="/call-w.svg" alt="phone" width={24} height={24} />
                  Shop Now
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default StaticTile;
