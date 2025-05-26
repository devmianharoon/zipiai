import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/home/Header";
import HeroBanner from "./component/HeroBanner";
import PackagesComparison from "./component/PackagesComparison";
import ServiceTiles from "./component/ServiceTiles";
import ServiceTylesTop from "./component/ServiceTylesTop";
import TopNavigation from "./component/TopNavigation";

export default function page() {
  const data = {
    title: "Bundle and Save, DirecTV Now",
    subtitle: "Beam it or Stream it",
    description:
      "Choose a DirecTV Package, Call Now for Special Offers",
  };
  return (
    <>
      <main className="bg-white">
        {/* <!-- Main Header Nav --> */}
        <Header />
        {/* <!--Top Buttom --> */}
        <TopNavigation />
        {/* <!-- Hero Banner --> */}
        <HeroBanner data={data}/>
        {/* <!-- Service Tiles --> */}
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
          <ServiceTiles />
        </div>

        {/* <!-- Packages Comaprison --> */}
        <PackagesComparison />

        {/* <!-- Service Tiles --> */}
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
          <ServiceTylesTop />
          <ServiceTiles />
        </div>
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
