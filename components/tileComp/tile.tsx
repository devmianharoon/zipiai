interface BroadbandProvider {
  available: string;
  Connection_Type: string;
  // ProviderDetailPage: string;
  ProviderName: string;
  contact: string;
  Speeds_Up_To: string;
  Plans_Starting_At: string;
  // ProviderViewPlans: string;
  logo: string;
  feactures: string;
  
}

//       "feactures"
type SingleProviderProps = BroadbandProvider;  // Defining prop type explicitly
import Image from "next/image";
// import Link from "next/link";
export default function SingleProvider({ data }: { data: SingleProviderProps }) {
  return (
    <div className="max-w-6xl mx-auto p-6 rounded-xl border border-gray-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4  items-center">
        {/* Logo and Rating Section */}
        <div className="space-y-4">
          <Image src={`/assets/logos/${data.logo}`} alt={data.ProviderName} width={100} height={100} />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">3.4</span>
              <div className="flex text-yellow-400">{"★★★½☆"}</div>
            </div>
            <p className="text-sm text-gray-600">User Ratings (3,203)*</p>
          </div>
        </div>

        {/* Pricing Section */}
        <div>
          <h3 className="text-sm font-medium text-gray-600">Plans Starting At</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">{data.Plans_Starting_At}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Prices may vary depending on the plan</p>
        </div>

        {/* Speed Section */}
        <div>
          <h3 className="text-sm font-medium text-gray-600">Speeds Up To</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">{data.Speeds_Up_To.split(' ')[0]}</span>
            <span className="text-2xl font-bold">{data.Speeds_Up_To.split(' ')[1]}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Ltd. avail/areas. Speeds vary, not g td. Single devices wired speed maximum {parseFloat(data.Speeds_Up_To.split(' ')[0]) - 0.3}Gbps.
          </p>
        </div>

        {/* Connection Info and CTA Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Connection:</span>
              <span>{data.Connection_Type}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Availability:</span>
              <span>{data.available}</span>
            </div>
          </div>

          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-green-800">
              <span className="inline-block mr-2">⚡</span>
              Over 100 speed tests confirm high speeds for {data.ProviderName} Internet
            </p>
            <p>{data.feactures}</p>
          </div>

          <div className="space-y-2">
            {/* <Link href={data.ProviderViewPlans} className="w-full bg-rose-500 hover:bg-rose-600 text-center block py-2 rounded">
              View Plans
            </Link> */}
            <button className="w-full bg-white text-center font-[700] text-[16px] py-2 border border-gray-300 rounded hover:bg-redish hover:text-white "  onClick={() => window.open(`tel:${data.contact}`)}
            >
              {/* {data.ProviderPhone} */}
              Connect With Sales Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
