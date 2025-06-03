
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Provider } from "../data/types/responsetype";
import Image from "next/image";

export default function ProviderComparison() {
  // Access provider data from Redux store
  const { data } = useSelector((state: RootState) => state.chat);

  // Extract the first 4 providers (or adjust as needed)
  const providers: Provider[] = data?.providers?.slice(0, 4) || [];

  // Generate all unique pairwise comparisons
  const comparisons = providers.flatMap((provider1, index1) =>
    providers.slice(index1 + 1).map((provider2) => ({
      id: `${provider1.ProviderName}-vs-${provider2.ProviderName}`,
      provider1: provider1.ProviderName,
      provider2: provider2.ProviderName,
      logo1: provider1.logo,
      logo2: provider2.logo,
    }))
  );

  return (
    <div className="w-full  mx-auto  lg:max-w-6xl mb-[25px] lg:mb-[35]  px-[21px] lg:px-0">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
          {comparisons.map((comparison,index:number) => (
            <div className="bg-white border-1 border-[var(--color-silver)] rounded-2xl w-[175px] h-[230px] p-[20px] flex flex-col justify-between" key={index}>
              <div className="flex justify-center items-start flex-col  gap-[16px]">
              <Image src={`/assets/logos/${comparison.logo1}`} alt={comparison.provider1} width={80} height={30} />
              <Image src={`/assets/logos/${comparison.logo2}`} alt={comparison.provider2} width={80} height={30} />
            </div>
              <div className="text-center  ">
                <Link
                key={comparison.id}
                href={`/compare/${comparison.id}`}
              >
                <p className="text-center text-black text-lg font-semibold">{comparison.provider1} <br />vs. <br /> {comparison.provider2?.split(" ")[0]}</p>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
