import Image from "next/image";
import { Provider } from "./../../../../data/types/responsetype";

export default function OtherProvider({ data, index }: { data: Provider, index: number }) {
  // Determine background color based on index with cycling pattern
  const getBackgroundColor = () => {
    const cycleIndex = index % 5; // Cycle every 5 components
    switch (cycleIndex) {
      case 0: // First, sixth, eleventh, etc.
        return "rgba(255, 255, 255, 1)";
      case 1: // Second, seventh, twelfth, etc.
        return "rgba(3, 10, 19, 0.15)";
      case 2: // Third, eighth, thirteenth, etc.
      case 3: // Fourth, ninth, fourteenth, etc.
        return "rgba(255, 255, 255, 1)";
      case 4: // Fifth, tenth, fifteenth, etc.
        return "rgba(255, 77, 77, 0.15)";
      default:
        return "rgba(255, 255, 255, 1)"; // Fallback
    }
  };

  return (
    <>
      <div className="w-full">
        <div
          className="rounded-2xl border border-gray-200 p-6 shadow-sm"
          style={{ backgroundColor: getBackgroundColor() }}
        >
          {/* data Logo */}
          <div className="mb-6 h-8  relative">
            <Image
              src={`/assets/logos/${data.logo}`}
              alt={data.ProviderName}
              className="h-8 object-contain"
              fill
            />
          </div>

          {/* Speed Info */}
          <div className="flex justify-between items-start lg:block">
            <div className="mb-4">
              <p className="text-sm lg:text-[16px] text-black mb-1">Speed up to</p>
              <p className="text-2xl lg:text-[32px] font-semibold text-black lg:mb-[30px] lg:leading-[52px] tracking-[-7%]">
                {data.Speeds_Up_To}
              </p>
              <div className="hidden">
                <p className="text-sm lg:text-[16px] text-black mb-1">Plans starting at</p>
                <p className="text-2xl lg:text-[32px] font-semibold text-black lg:mb-[30px]">
                  {data.Plans_Starting_At}
                </p>
              </div>
              <div className="lg:hidden">
                <span className="text-sm text-black font-normal lg:text-base">Connection: </span>
                <span className="text-sm font-semibold text-black lg:text-base">
                  {data.Connection_Type}
                </span>
              </div>
            </div>

            {/* Pricing Info */}
            <div className="mb-6">
              <p className="text-sm lg:text-[16px] text-black mb-1">Plans starting at</p>
              <p className="text-2xl lg:text-[32px] font-semibold text-black lg:leading-[52px] tracking-[-7%]">
                {data.Plans_Starting_At}
              </p>
              <div className="lg:flex">
                <span className="text-sm text-gray-500">Availability: </span>
                <span className="text-sm font-semibold text-gray-900 lg:mb-[40px]">
                  {data.available}
                </span>
              </div>
              <div className="hidden lg:flex">
                <span className="text-sm text-black font-normal lg:text-base">Connection: </span>
                <span className="text-sm font-semibold text-black lg:text-base">
                  {data.Connection_Type}
                </span>
              </div>
            </div>
          </div>

          {/* View Plans Button */}
          <button
            className="w-full bg-[var(--color-red)] text-white py-3 rounded-full font-medium transition-colors"
          >
            View plans
          </button>
        </div>
      </div>
    </>
  );
}