import { Channel } from "../../../../data/types/channelsTypes";

interface ChannelTableProps {
  channels: Channel[];
  packages: string[];
}

export default function ChannelTable({
  channels,
  packages,
}: ChannelTableProps) {
  return (
    <div className="w-auto h-auto mx-auto p-4">
      <div className=" ">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">
                Channel Name
              </th>
              <th className="border border-gray-300 p-2 text-center">
                Ch. No.
              </th>
              {packages.map((pkg, index) => (
                <th
                  key={index}
                  className="border border-gray-300 p-2 text-center"
                >
                  {pkg}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {channels.map((channel, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 p-2">
                  {channel.chnlname}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {channel.chnlNumber}
                </td>
                {packages.map((pkg, pkgIndex) => (
                  <td
                    key={pkgIndex}
                    className="border border-gray-300 p-2 text-center"
                  >
                    {channel.inPackags[pkgIndex] === 1 ? "✓" : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
