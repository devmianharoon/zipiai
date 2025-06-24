import Image from "next/image";
import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import MobileMenu from "../../../components/common/header/MobileMenu";
import Experience from "../../../components/home/Experience";
import Header from "../../../components/home/Header";
import MobileFooter from "../../../components/home/MobileFooter";
import EndlessEntertainment from "./component/EndlessEntertainment";
// import HeroBanner from "./component/HeroBanner";
import HeroBannerDirecTv from "./component/HeroBannerDirecTv";
import OneDevice from "./component/OneDevice";
import PackagesComparison from "./component/PackagesComparison";
import ServiceTiles from "./component/ServiceTiles";
import ServiceTylesTop from "./component/ServiceTylesTop";
import StreamAnywhere from "./component/StreamAnywhere";
import StreamYourWay from "./component/StreamYourWay";

export default function page() {
  const data = {
    title: "Unleash Your Entertainment",
    subtitle: "DirecTV via Internet",
    description: "Stream Your Way!",
  };
  return (
    <>
      <main className="bg-white">
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!-- Mobile Menu --> */}
        <MobileMenu />
        {/* <TopNavigation /> */}
        {/* <!-- Hero Banner --> */}
        <HeroBannerDirecTv data={data} />

        {/* Stream Your Way */}
        <StreamYourWay />

        {/* <!-- Service Tiles --> */}
        <div className="w-full max-w-6xl mx-auto ">
          <ServiceTiles />
        </div>

        {/* Stream Anywhere */}
        <StreamAnywhere />

        {/* One Device */}
        <OneDevice />

        {/* <!-- Packages Comaprison --> */}
        <PackagesComparison />
        <div className="w-full h-auto flex justify-center items-center pt-[161px]">
          <div className=" h-[185px] w-[372px] md:w-[1145px] md:h-[222px]  rounded-[18px]   p-2 md:py-3 md:px-[83px]  flex flex-col md:flex-row justify-between items-center  bg-[url('/assets/testspeed.png')] bg-cover bg-left    ">
            <div className="w-[525px] ">
              <h3 className="text-[var(--color-white)]  md:text-[32px] text-[20px] md:leading-[42px] leading-[28px] font-[600] tracking-[-0.64px] pb-[25px]">
                Have questions? We’ve got answers.
              </h3>
              <p className="text-white text-[16px] dont-[500] leading-[26px] tracking-[-0.16px]">
                Call now to speak with a friendly, authorized DirecTv sales
                representative.  We’ll walk you through it all and help you find
                the perfect package – no pressure, just answers. 
              </p>
            </div>
            <button className="w-[228px] h-[50px]  bg-[var(--color-black)] text-white  rounded-full text-base font-medium  transition-colors">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src="/call-Icon.svg"
                  alt="phone"
                  width={24}
                  height={24}
                />
                <span className="text-lg font-medium">888 564 5552 </span>
              </div>
            </button>
          </div>
        </div>

        {/* <!-- Service Tiles --> */}
        <div className="w-full max-w-6xl mx-auto px-[17px] lg:px-0">
          <ServiceTylesTop />
        </div>

        <EndlessEntertainment />
      </main>

      <Experience />

      {/* <!-- Our Footer --> */}
      <section className="footer_one w-full hidden md:flex justify-center items-center  bg-bluish pt-[270px] bg-[rgba(11,107,221,0.1)]">
        <div className="container flex justify-center items-center">
          <Footer />
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="hidden  footer_middle_area md:flex justify-center items-center bg-[rgba(11,107,221,0.1)]  ">
        <div className="container flex justify-center items-center">
          <CopyrightFooter />
        </div>
      </section>

      <MobileFooter />
    </>
  );
}
