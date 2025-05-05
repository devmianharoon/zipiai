"use client";
import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import MobileMenu from "../../../components/common/header/MobileMenu";
import Crusal from "../../../components/home/Crusal";
import Header from "../../../components/home/Header";
import TestSpeed from "../../../components/home/TestSpeed";
import HeroDynamic from "../../../components/ZipCode/heroDynamic";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import SingleProvider from "../../../components/tileComp/tile";
import InternetComparison from "../../../components/ZipCode/table";
import { Provider } from "../../../data/types/responsetype";
import InternetComparisonSimple from "../../../components/ZipCode/InternetComparison";
import { useParams } from "next/navigation";
import ZipBreadcrumb from "../../../components/home/Breadcrumb";
import { useEffect } from "react";
import { fetchZipData } from "../../../store/slices/zipSlice";
import { fetchProvidersByZip } from "../../../store/slices/chatSlice";

export default function Page() {
  const params = useParams(); // Get dynamic route parameters as per Next.js docs
  console.log("Dynamic Parameters:", params);
  console.log("Zip code from URL:", params.zipcode);
  const dispatch = useDispatch<AppDispatch>();

  const selectedQuestion = useSelector(
    (state: RootState) => state.question.selectedQuestion
  );
  console.log("Selected Question from Redux:", selectedQuestion);
  const { data, loading, error } = useSelector(
    (state: RootState) => state.chat
  );
  console.log("Messages from data:", data);
  console.log("Loading from Redux:", loading);
  console.log("Error from Redux:", error);
  const zipCode = Array.isArray(params.zipcode)
    ? params.zipcode[0]
    : params.zipcode || "";
  useEffect(() => {
    if (zipCode) {
      dispatch(fetchZipData(zipCode));
      dispatch(fetchProvidersByZip(zipCode));

    }
  }, [dispatch, zipCode]);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />
      {/* <!-- Breadcrumb --> */}
      {zipCode && <ZipBreadcrumb zipCode={zipCode} />}

      {/* <!-- Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Home Design --> */}
      <HeroDynamic />

      {loading && (
        <div className="flex justify-center items-center py-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center py-10 text-red-600">
          <p className="text-lg font-medium">Error loading data: {error}</p>
        </div>
      )}

      {data?.providers.map((provider: Provider, index: number) => (
        <div className="p-2" key={index}>
          <SingleProvider data={provider} />
        </div>
      ))}

      {data && <InternetComparison data={data} />}
      {data && <InternetComparisonSimple />}

      <TestSpeed />
      <Crusal />

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
