import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import MobileMenu from "../../../components/common/header/MobileMenu";
import Experience from "../../../components/home/Experience";
import Header from "../../../components/home/Header";
import MobileFooter from "../../../components/home/MobileFooter";
// import HeroBanner from "./component/HeroBanner";
import HeroBannerDirecTv from "./component/HeroBannerDirecTv";
import PackagesComparison from "./component/PackagesComparison";
import ServiceTiles from "./component/ServiceTiles";
import ServiceTylesTop from "./component/ServiceTylesTop";
import StreamAnywhere from "./component/StreamAnywhere";
import StreamYourWay from "./component/StreamYourWay";
import TopNavigation from "./component/TopNavigation";

export default function page() {
  const data = {
    title: "Entertainment Your Way",
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

        {/* <!-- Packages Comaprison --> */}
        <PackagesComparison />

        {/* <!-- Service Tiles --> */}
        <div className="w-full max-w-6xl mx-auto px-[17px] lg:px-0">
          <ServiceTylesTop />
          <ServiceTiles />
        </div>
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
