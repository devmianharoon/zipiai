"use client";
import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import MobileMenu from "../../../components/common/header/MobileMenu";
import Header from "../../../components/home/Header";
import HeroDynamic from "../../../components/ZipCode/heroDynamic";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import SingleProvider from "../../../components/tileComp/tile";

import { Provider } from "../../../data/types/responsetype";
import { useParams } from "next/navigation";
import ZipBreadcrumb from "../../../components/home/Breadcrumb";
import { useEffect } from "react";
import { fetchZipData } from "../../../store/slices/zipSlice";

import { fetchProvidersByZip } from "../../../store/slices/chatSlice";
import ProviderComparison from "../../../components/ProviderComparison";
import MapComponent from "./component/Map";
import NearByCities from "../../../components/NeabyCIties";

import { Search, ChevronDown} from "lucide-react";
import Recommendation from "./component/Recommendation";

export default function Page() {
  const params = useParams(); // Get dynamic route parameters as per Next.js docs
  console.log("Dynamic Parameters:", params);
  console.log("Zip code from URL:", params.zipcode);
  const dispatch = useDispatch<AppDispatch>();
  // const zip = useSelector((state: RootState) => state.zip.data);

  const selectedQuestion = useSelector(
    (state: RootState) => state.question.selectedQuestion
  );
  console.log("Selected Question from Redux:", selectedQuestion);
  const { data, loading, error } = useSelector(
    (state: RootState) => state.chat
  );

  console.log("Messages from data in page :", data);
  console.log("Loading from Redux:", loading);
  console.log("Error from Redux:", error);
  const zipCode = Array.isArray(params.zipcode)
    ? params.zipcode[0]
    : params.zipcode || "";
  useEffect(() => {
    if (zipCode) {
      dispatch(fetchZipData(zipCode));
      dispatch(fetchProvidersByZip(zipCode));
      // dispatch(fetchProviders("The Best Internet Near Me " + zipCode));
    }
  }, [dispatch, zipCode]);

  // if (loading) {
  //   return (
  //     <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50">
  //       <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  //     </div>
  //   );
  // }

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!-- Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Home Design --> */}
      <HeroDynamic zipCode={zipCode} />
      {/* <!-- Breadcrumb --> */}
      {zipCode && <ZipBreadcrumb zipCode={zipCode} />}
      {/* Heading  */}
      <p className="p-tight text-center text-[var(--color-blue)] mt-[90px]">
        Search Result
      </p>
      <h1 className="text-center mt-[20px] mb-[40px]">
        Top 5 Internet service provider in{" "}
        <span className="text-[var(--color-blue)]">{zipCode}</span>{" "}
      </h1>
      {/* Search Bar  */}
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

      <div className="bg-white">
        {loading && (
          <div className="flex justify-center items-center py-10">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {data?.providers.map((provider: Provider, index: number) => (
          <div className="p-2" key={index}>
            <SingleProvider data={provider} />
          </div>
        ))}
        


<Recommendation/>



        {/* TV Section */}
        {/* <TVProvider data={LiveTvData[0]} /> */}

        {/* Internet Comparison Section */}
        {/* {data && <InternetComparison data={data} />} */}
        {/* {data && <InternetTypes />} */}
        {/* Other Providers  */}
        {/* <div>
          <h2 className=" text-[30px] font-bold text-black text-center pt-10 pb-10">
            More Internet Providers Near Me
          </h2>
          {data?.other_providers.map((provider: Provider, index: number) => (
            <div className="p-2" key={index}>
              <SingleProvider data={provider} />
            </div>
          ))}
        </div> */}
        {/* Comparison Section */}
        <div className="p-5">
          <h2 className=" p-10 text-[30px] font-bold text-black text-center ">
            Compare Top Providers in Your Area
          </h2>
          <ProviderComparison />

          <div className="w-full max-w-6xl mx-auto px-4  py-3.5">
            <MapComponent zipcode={zipCode} />
          </div>
          <h2 className=" p-10 text-[30px] font-bold text-black text-center ">
            Internet Providers in NearBy Cities
          </h2>
          <NearByCities />
        </div>
      </div>
      {/* Map Section */}

      <section className="footer_one flex justify-center items-center bg-bluish pt-[70px] pb-20">
        <div className="container ">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area flex justify-center items-center bg-bluish py-14">
        <div className="container ">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
}
