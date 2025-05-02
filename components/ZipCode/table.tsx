'use client';

import { InternetData  , Provider} from "../../data/types/responsetype";


type Props = {
  data: InternetData;
};

export default function InternetComparison(data :Props )   {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Side By Side Comparison Table
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-300">
          <thead className="bg-bluish text-white">
            <tr>
              <th className="p-2">Provider</th>
              <th className="p-2">Type</th>
              <th className="p-2">Max Speed</th>
              <th className="p-2">Starting Price</th>
              <th className="p-2">Data Caps</th>
              <th className="p-2">Contract</th>
              <th className="p-2">Best For</th>
            </tr>
          </thead>
          <tbody>
            {data.data.providers.map((provider : Provider , index) => (
              <tr key={index} className="text-center border-t">
                <td className="p-2 font-semibold">{provider.ProviderName}</td>
                <td className="p-2">{provider.Connection_Type}</td>
                <td className="p-2">{provider.Speeds_Up_To}</td>
                <td className="p-2">{provider.Plans_Starting_At}</td>
                <td className="p-2">{provider["Data Caps"]}</td>
                <td className="p-2">{provider.Contract}</td>
                <td className="p-2">{provider["Best For"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 space-y-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Recommendations
      </h2>
        {data.data.Ranks.map((rank) => (
          <div
            key={rank.Rank}
            className="bg-white shadow p-4 rounded border-l-4 border-blue-500"
          >
            <h3 className="font-semibold text-lg">
              #{rank.Rank} - {rank.ProviderName}
            </h3>
            <p className="text-gray-700 mt-1">{rank.Reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

