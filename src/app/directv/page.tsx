import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/home/Header";
import HeroBanner from "./component/HeroBanner";
import PackagesComparison from "./component/PackagesComparison";
import ServiceTiles from "./component/ServiceTiles";
import TopNavigation from "./component/TopNavigation";

export default function page() {
  return (
    <>
      <main className="bg-white">
        {/* <!-- Main Header Nav --> */}
        <Header />
        {/* <!--Top Buttom --> */}
        <TopNavigation />
        {/* <!-- Hero Banner --> */}
        <HeroBanner />
        {/* <!-- Packages Comaprison --> */}
        <PackagesComparison />
        {/* <!-- Service Tiles --> */}
        <ServiceTiles />
      </main>

      {/*  */}
      {/* Footer */}
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
