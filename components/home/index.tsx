"use client";
import type { RootState, AppDispatch } from "../../store/store";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";
import Hero from "./Hero";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import {
  setLocation,
  setZipCode,
  setLocationError,
  fetchZipCode,
} from "../../store/slices/LocationSlice";
import TestSpeed from "./TestSpeed";
import Crusal from "./Crusal";
import SectionOne from "./SectionOne";

import NewsLetter from "./NewsLetter";

import Showcase from "./Showcase";

// import SingleProvider from "../tileComp/tile";

const Index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { location, zipCode, error, loading } = useSelector(
    (state: RootState) => state.location
  );
  console.log("Location from Redux:", location);
  console.log("Zip Code from Redux:", zipCode);
  console.log("Error from Redux:", error);
  console.log("Loading from Redux:", loading);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Dispatch coordinates to Redux
          dispatch(setLocation({ lat: latitude, lon: longitude }));
          // Dispatch async action to fetch zip code
          dispatch(fetchZipCode({ lat: latitude, lon: longitude }));
        },
        (err) => {
          dispatch(setLocationError(err.message));
        }
      );
    } else {
      dispatch(
        setLocationError("Geolocation is not supported by this browser.")
      );
    }
  };

  useEffect(() => {
    const savedZipCode = Cookies.get("user_zipcode");
    if (savedZipCode) {
      console.log("Zip code from cookie:", savedZipCode);
      // Dispatch saved zip code to Redux
      dispatch(setZipCode(savedZipCode));
    } else {
      // If no zip code, get current location and fetch zip code
      getLocation();
    }
  }, [dispatch]);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />
      <h1 className="flex font-fs">hi </h1>

      {/* <!-- Modal --> */}
      {/* <PopupSignInUp /> */}

      {/* <!-- Home Design --> */}
      <Hero />
      {/* <SingleProvider data={data} /> */}

      <TestSpeed />
      {/*logos crusal */}
      <Crusal />
      {/*show case cards */}
      <Showcase />
      {/* <BannerOne /> */}
      {/* section one with left image right text  */}
      <SectionOne />
      {/* <BannerTwo /> */}

      {/* section two with left text right image  */}
      {/* <!-- Placeholder Section --> */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-10 ">
        <div className="bg-blue-50 rounded-lg p-6 w-auto h-[300px] ">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-semibold text-black">Placeholder</h2>
          </div>
        </div>
      </div>
      {/* <SectionTwo /> */}
      <NewsLetter />
      {/* <!-- Our Footer --> */}
      <section className="footer_one flex justify-center items-center bg-bluish pt-[70px] ">
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
};

export default Index;
