"use client";
import { useEffect, useRef } from "react";
import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import MobileMenu from "../../../components/common/header/MobileMenu";
import Header from "../../../components/home/Header";
import Hero from "../../../components/home/Hero";
import MobileFooter from "../../../components/home/MobileFooter";

export default function Page() {
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
  if (typeof window !== "undefined" && window.location.hash === "#speed-test") {
    const section = document.getElementById("speed-test");
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 300); // slight delay after route load
    }
  }
}, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!-- Mobile Menu --> */}
      <MobileMenu />

      {/* Hero Section */}
      <Hero />

      

      {/* Speed Test Section */}
      <div
        className="w-full mt-20 px-4 flex justify-center"
        ref={widgetContainerRef}
        id="speed-test"
      >
        <div className="w-full max-w-[800px] rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: "50%" }}>
            <iframe
              src="https://openspeedtest.com/speedtest"
              title="Internet Speed Test"
              className="absolute top-0 left-0 w-full h-full min-h-[360px]"
              style={{ border: "none", overflow: "hidden" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* Experience Section */}
      {/* <Experience /> */}

      {/* Desktop Footer */}
      <section className="footer_one w-full hidden md:flex justify-center items-center bg-bluish pt-[270px] bg-[rgba(11,107,221,0.1)] mt-20">
        <div className="container flex justify-center items-center">
          <Footer />
        </div>
      </section>

      {/* Desktop Footer Bottom */}
      <section className="hidden footer_middle_area md:flex justify-center items-center bg-[rgba(11,107,221,0.1)]">
        <div className="container flex justify-center items-center">
          <CopyrightFooter />
        </div>
      </section>

      {/* Mobile Footer */}
      <MobileFooter />
    </div>
  );
}
