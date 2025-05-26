"use client";
import Image from "next/image";
import { LiveTv } from "../../../../data/types/LiveTvTypes";

export default function TVProvider({ data }: { data: LiveTv }) {
  return (
    <div className="max-w-6xl mx-auto p-6 rounded-xl border border-gray-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center">
        {/* Logo and Rating Section */}
        <div className="flex flex-col items-center justify-between gap-4">
          <Image
            src={`${data.logo}`}
            alt={data.name}
            width={250}
            height={250}
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-600">{data.name}</h2>
          </div>
        </div>
        {/* Features Section */}
        <div className="self-baseline p-2.5">
          <div>
            <h3 className="text-2xl font-bold text-gray-600">Description</h3>
            <p>{data.description}</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-600">Feactures</h3>
          <ul className="list-disc  text-black space-y-1">
            {data.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Pricing Section */}
        <div className="p-3">
          <h3 className="text-xs font-bold text-gray-600">Plans Starting At</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-[20px] font-bold text-black">
              {data.price.amount}
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            Prices may vary depending on the plan
          </p>
          <div className="space-y-2">
            <div className="flex align-center gap-2.5 mt-3">
              <div className="text-xs font-extrabold text-gray-600">Trial:</div>
              <div className="text-xs text-black">{data.price.trial}</div>
            </div>
          </div>
          <button
            className="flex justify-center mt-5 p-2 w-full gap-2 bg-white text-center text-2xl font-bold py-2 mouse-pointer"
            onClick={() => window.open(`tel:${"932-123-4567"}`)}
          >
            <Image src={"/call.svg"} alt="phone" width={25} height={25} />
            {"932-123-4567"}
          </button>
        </div>
      </div>
    </div>
  );
}
