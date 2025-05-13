import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Provider } from "../data/types/responsetype";

export default function ProviderComparison() {
  // Access provider data from Redux store
  const { data} = useSelector(
    (state: RootState) => state.chat
  );

  // Extract the first 4 providers (or adjust as needed)
  const providers: Provider[] = data?.providers?.slice(0, 4) || [];

  // Generate all unique pairwise comparisons
  const comparisons = providers.flatMap((provider1, index1) =>
    providers.slice(index1 + 1).map((provider2) => ({
      id: `${provider1.ProviderName}-vs-${provider2.ProviderName}`, // Use ProviderName as a unique ID
      provider1: provider1.ProviderName,
      provider2: provider2.ProviderName,
    }))
  );



  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.id}
              href={`/compare/${comparison.id}`}
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              {comparison.provider1} vs. {comparison.provider2}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
