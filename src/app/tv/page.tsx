// import TVProvider from "../[zipcode]/component/TvSection";
// import LiveTvData from "../../../data/LiveTvData.json";
"use client";
import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import MobileMenu from "../../../components/common/header/MobileMenu";
import Header from "../../../components/home/Header";
import HeroBanner from "../directv/component/HeroBanner";
import Experience from "../../../components/home/Experience";
import { Search, ChevronDown } from "lucide-react";
// import { useSelector } from "react-redux";
//, RootState
import { AppDispatch } from "../../../store/store";
// import { Provider } from "../../../data/types/responsetype";
// import SingleProvider from "../../../components/tileComp/tile";
import { useEffect } from "react";
import { fetchProvidersByZip } from "../../../store/slices/chatSlice";
import { fetchZipData } from "../../../store/slices/zipSlice";
import { useDispatch } from "react-redux";
import TextSec from "./comp/TextSec";
import SectionOne from "../../../components/home/SectionOne";
import SectionTwo from "../../../components/home/SectionTwo";
import SectionThree from "../../../components/home/SectionThree";
import StaticTile from "../../../components/tileComp/StaticTile";

export default function Page() {
  const data1 = {
    title: "Unleash Your Entertainment",
    subtitle: "Find The Perfect TV Plan",
  };
  const dispatch = useDispatch<AppDispatch>();
  const zipCode = "10001";
  useEffect(() => {
    if (zipCode) {
      dispatch(fetchZipData(zipCode));
      dispatch(fetchProvidersByZip(zipCode));
      // dispatch(fetchProviders("The Best Internet Near Me " + zipCode));
    }
  }, [dispatch, zipCode]);
  // const { data, loading } = useSelector((state: RootState) => state.chat);
const data2 = [
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
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />
      {/* <!-- Mobile Menu --> */}
      <MobileMenu />
      {/* Hero Section */}
      <HeroBanner data={data1} />
      {/* Tv Section */}
      {/* {LiveTvData.map((tvProvider, index) => (
        <div className="mt-5 mb-5" key={index}>
          <TVProvider key={index} data={tvProvider} />
        </div>
      ))} */}

      {/* search results */}
      <p className="p-tight text-center text-[var(--color-blue)] mt-[90px]">
        Search Result
      </p>
      <h2 className="text-[30px] leading-[52px] font-[600] text-center mt-[20px] mb-[40px]">
        The Top TV Providers in <span>{`Campbell ,`} </span>
        <span> {`CA`}</span>
        <span> {zipCode}</span>
      </h2>
      {/* search bar */}
      <div className="w-full max-w-6xl mx-auto px-4  lg:flex gap-5 justify-center items-center">
        <div className="flex justify-center relative mb-[10px] lg:mb-0 w-full lg:w-[575px]">
          <input
            type="text"
            placeholder="Search by name, size, speed or feature"
            className="p-light w-full pl-4 pr-12 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />
        </div>
        {/* <div className="space-y-3 mb-6"> */}
        <button className="mb-[10px] lg:mb-0 w-full lg:w-[275px] flex items-center justify-between px-4 py-3 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50">
          <span className="p-light">Filter by</span>
          <ChevronDown className="h-5 w-5 text-blue-500" />
        </button>
        <button className="w-full lg:w-[275px] flex items-center justify-between px-4 py-3 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50">
          <span className="p-light">Sort by</span>
          <ChevronDown className="h-5 w-5 text-blue-500" />
        </button>
        {/* </div> */}
      </div>
      {/*providers */}
      {/* <div className="bg-white">
        {loading && (
          <div className="flex justify-center items-center py-10">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {data?.providers.map((provider: Provider, index: number) => (
          <div
            className="w-full px-5 py-[15px] lg:max-w-6xl lg:mx-auto lg:pt-[25px]"
            key={index}>
            <SingleProvider data={provider} index={0} />
          </div>
        ))}
      </div> */}
      
       {data2?.map((data, index: number) => (
          <div
            className="w-full lg:max-w-6xl lg:mx-auto  lg:py-[12.5px]   "
            key={index}
          >
            <StaticTile data={data} border="border-gray-200" />
          </div>
        ))} 
      {/* search results */}

      <TextSec />

      {/* section one with left image right text  */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />

      {/* <!-- Our Footer --> */}
      <Experience />
      <section className="footer_one w-full flex justify-center items-center  bg-bluish pt-[270px] bg-[rgba(11,107,221,0.1)]">
        <div className="container flex justify-center items-center">
          <Footer />
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area flex justify-center items-center bg-[rgba(11,107,221,0.1)]  py-10">
        <div className="container flex justify-center items-center">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
}
