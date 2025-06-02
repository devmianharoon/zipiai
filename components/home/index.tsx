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

import Crusal from "./Crusal";

// import NewsLetter from "./NewsLetter";

import Whyus from "./Whyus";

import BannerThree from "./BannerThree";
import OfferSec from "./OfferSec";
import Blogs from "./Blogs";
import Experience from "./Experience";
import MobileFooter from "./MobileFooter";

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

      {/* <!-- Modal --> */}
      {/* <PopupSignInUp /> */}

      {/* <!-- Home Design --> */}
      <Hero />
      {/* <SingleProvider data={data} /> */}

      <Whyus />

      {/* <TestSpeed /> */}
      {/*logos crusal */}
      <Crusal />

      <OfferSec />

      <BannerThree
        data={{
          title: "Stream. Chill. Repeat.",

          description:
            "Enjoy cinematic experiences from your couch, with instant access to your favorite movies,shows, sports, and news. Watch on your smart TV, tablet, phone, or laptop—at home or on the go. With on-demand content and cloud DVR, you're in full control. No contracts. No cable clutter. Just the entertainment you love, wherever and whenever you want it. Stream smarter. Live freer. Order today. ",
        }}
      />

      <Blogs />
      <Experience />

      {/*show case cards */}
      {/* <Showcase /> */}
      {/* <BannerOne /> */}
      {/* section one with left image right text  */}
      {/* <SectionOne /> */}
      {/* <BannerTwo /> */}

      {/* section two with left text right image  */}
      {/* <!-- Placeholder Section --> */}
      {/* <div className="w-full max-w-6xl mx-auto px-4 mb-10 ">
        <div className="bg-blue-50 rounded-lg p-6 w-auto h-[300px] ">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-semibold text-black">Placeholder</h2>
          </div>
        </div>
      </div> */}
      {/* <SectionTwo /> */}
      {/* <NewsLetter /> */}
      {/* <!-- Our Footer --> */}
      <section className="footer_one w-full hidden md:flex justify-center items-center  bg-bluish pt-[270px] bg-[rgba(11,107,221,0.1)]">
        <div className="container flex justify-center items-center">
          <Footer />
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="hidden  footer_middle_area md:flex justify-center items-center bg-[rgba(11,107,221,0.1)]  py-4">
        <div className="container flex justify-center items-center">
          <CopyrightFooter />
        </div>
      </section>

      <MobileFooter></MobileFooter>
    </>
  );
};

export default Index;
