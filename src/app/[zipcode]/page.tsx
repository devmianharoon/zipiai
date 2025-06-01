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
import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import NearbyCities from "./component/NearByCities";
import InternetComparison from "../../../components/ZipCode/table";
import Recommendation from "./component/Recommendation";
import Experience from "../../../components/home/Experience";

export default function Page() {
  // Sample city data
  const citiesData = [
    { name: "Milpitas", state: "CA", id: "milpitas-ca" },
    { name: "Sunnyvale", state: "CA", id: "sunnyvale-ca" },
    { name: "Campbell", state: "CA", id: "campbell-ca" },
    { name: "Alviso", state: "CA", id: "alviso-ca" },
    { name: "San Jose", state: "CA", id: "san-jose-ca" },
    { name: "Mountain View", state: "CA", id: "mountain-view-ca" },
    { name: "Cupertino", state: "CA", id: "cupertino-ca" },
    { name: "Palo Alto", state: "CA", id: "palo-alto-ca" },
    { name: "Newark", state: "CA", id: "newark-ca" },
    { name: "Fremont", state: "CA", id: "fremont-ca" },
    { name: "Stanford", state: "CA", id: "stanford-ca" },
    { name: "Los Gatos", state: "CA", id: "los-gatos-ca" },
    { name: "Portola Valley", state: "CA", id: "portola-valley-ca" },
    { name: "Menlo Park", state: "CA", id: "menlo-park-ca" },
  ];

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
          <div
            className="w-full px-5 py-[15px] lg:max-w-6xl lg:mx-auto lg:pt-[25px]"
            key={index}>
            <SingleProvider data={provider} />
          </div>
        ))}
        {/* Call Section */}
        <div className="w-full h-[372px] md:h-[222px] md:w-[1144px] mx-auto px-[15px] mt-[60px] ">
          <div className="w-full h-full   bg-[url('/bg-page.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col md:flex-row md:justify-between md:items-center gap-8 rounded-[18px] px-4 md:px-10">
            <h1 className="text-white text-center md:text-left text-[30px] md:text-[32px] leading-[38px] w-[60%]">
              Make a quick call to discuss your need, We suggest you the best
              plan!{" "}
            </h1>
            <div>
              <button
                onClick={() => window.open(`tel:1800-123-4567`)}
                className="w-[208px] h-[50px] mx-auto  bg-gray-900 text-white  rounded-full text-base font-medium hover:bg-gray-800 transition-colors">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/call-Icon.svg"
                    alt="phone"
                    width={24}
                    height={24}
                  />
                  <span className="text-lg font-medium"> 888 564 5552</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* TV Section */}
        {/* <TVProvider data={LiveTvData[0]} /> */}

        {/* Internet Comparison Section */}
        {data && <InternetComparison data={data} />}

        {/*recommendation seactionn */}
        <Recommendation />
        {/* {data && <InternetTypes />} */}
        {/* Other Providers  */}
        <div>
          <h2 className=" text-[30px] font-bold text-black text-center pt-10 pb-10">
            More Internet Providers Near Me
          </h2>
          {data?.other_providers.map((provider: Provider, index: number) => (
            <div className="p-2" key={index}>
              <SingleProvider data={provider} />
            </div>
          ))}
        </div>
        {/* Comparison Section */}
        <div className="">
          <h1 className=" px-[46px] pt-[60px] pb-[15px]  font-semibold text-black text-center text-[30px] lg:text-[42px] leading-[40px] lg:leading-[52px] mb-[15px] lg:mb[45px]">
            Compare Top <br className="hidden lg:block" /> Providers in Your
            Area
          </h1>
          <ProviderComparison />

          <div className="w-full max-w-6xl mx-auto ">
            <MapComponent zipcode={zipCode} />
          </div>
          <h2 className=" p-10 text-[30px] font-bold text-black text-center ">
            Internet Providers in NearBy Cities
          </h2>
          <NearByCities />
        </div>
      </div>
      {/* NearBy Cities Section */}
      <div>
        <NearbyCities cities={citiesData} />
      </div>

      <Experience />

      {/* <!-- Our Footer --> */}
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
