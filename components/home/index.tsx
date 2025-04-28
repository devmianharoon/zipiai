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
      <TestSpeed />

      {/* <!-- Our Footer --> */}
      <section className="footer_one flex justify-center items-center">
        <div className="container ">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area flex justify-center items-center">
        <div className="container ">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Index;
