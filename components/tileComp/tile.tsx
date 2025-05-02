//       "feactures"
import Image from "next/image";
import Link from "next/link";
import { Provider } from "../../data/types/responsetype";
// import Link from "next/link";
export default function SingleProvider({ data }: { data: Provider }) {
  return (
    <div className="max-w-6xl mx-auto p-6 rounded-xl border border-gray-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4  items-center">
        {/* Logo and Rating Section */}
        <div className="space-y-4">
          <Image
            src={`/assets/logos/${data.logo}`}
            alt={data.ProviderName}
            width={100}
            height={100}
          />
        </div>

        {/* Pricing Section */}
        <div className="p-3">
          <h3 className="text-xs font-bold text-gray-600">Plans Starting At</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-[20px] font-bold text-black">
              {data.Plans_Starting_At}
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            Prices may vary depending on the plan
          </p>
          <h3 className="text-xs font-bold text-gray-600  ">Speeds Up To</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">
              {data.Speeds_Up_To.split(" ")[0]}
            </span>
            <span className="text-[20px] font-bold">
              {data.Speeds_Up_To.split(" ")[1]}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex align-center gap-2.5 mt-3 ">
              <div className="text-xs font-extrabold  text-gray-600">
                Connection:
              </div>
              <div className="text-xs   text-black">
                {data.Connection_Type}
              </div>
            </div>
            <div className="flex    align-center gap-2.5">
              <div className="text-xs font-extrabold text-gray-600">
                Availability:
              </div>
              <div className="text-xs   text-black">
                {data.available}
              </div>
            </div>
          </div>
          {/* speed section */}
        </div>

        {/* Speed Section */}
        <div className="self-baseline p-2.5">
          <h3 className="text-2xl font-bold text-gray-600  ">Features</h3>
          <ul className="list-disc list-inside text-black space-y-1">
            {data.feactures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>{" "}
        </div>

        {/* Connection Info and CTA Section */}
        <div className="space-y-4">
          {/* buttion section */}
          <div className="space-y-2">
            <Link
              href={"#"}
              className="w-full font-[700] text-[16px] bg-redish text-center block py-2 rounded text-white"
            >
              View Plans
            </Link>
            <button
              className="flex p-2 w-full gap-2 bg-white text-center font-[700] text-[16px] py-2 border border-gray-300 rounded mouse-pointer "
              onClick={() => window.open(`tel:${data.contact}`)}
            >
              {/* {data.ProviderPhone} */}
              <Image src={"/call.svg"} alt="phone" width={25} height={25} />
              Connect With Sales Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
