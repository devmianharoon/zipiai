import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import MobileMenu from "../../../components/common/header/MobileMenu";
import Experience from "../../../components/home/Experience";
import Header from "../../../components/home/Header";
import HeroBanner from "./component/HeroBanner";
import PackagesComparison from "./component/PackagesComparison";
import ServiceTiles from "./component/ServiceTiles";
import ServiceTylesTop from "./component/ServiceTylesTop";
import TopNavigation from "./component/TopNavigation";

export default function page() {
  const data = {
    title: "Entertainment Your Way",
    subtitle: "DirecTV via Internet",
    description: "Choose a DirecTV package. Call Now for Special Offers",
  };
  return (
    <>
      <main className="bg-white">
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!-- Mobile Menu --> */}
        <MobileMenu />
        <TopNavigation />
        {/* <!-- Hero Banner --> */}
        <HeroBanner data={data} />
        {/* <!-- Service Tiles --> */}
        <div className="w-full max-w-6xl mx-auto ">
          <ServiceTiles />
        </div>

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
