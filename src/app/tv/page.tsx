import TVProvider from "../[zipcode]/component/TvSection";
import LiveTvData from "../../../data/LiveTvData.json";
import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import MobileMenu from "../../../components/common/header/MobileMenu";
import Header from "../../../components/home/Header";
import HeroBanner from "../directv/component/HeroBanner";

export default function Page() {
    const data = {
        title: "Best TV Streaming Services with Live Channels",
        subtitle: "Watch Your Favorite Channels Anytime, Anywhere",
        // description: "Explore the best live TV streaming services available in your area. Enjoy a wide range of channels and on-demand content with flexible subscription options.",
    };
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />
      {/* <!-- Mobile Menu --> */}
      <MobileMenu />
      {/* Hero Section */}
      <HeroBanner  data={data}/>
      {/* Tv Section */}
      {LiveTvData.map((tvProvider, index) => (
        <div className="mt-5 mb-5" key={index}>
          <TVProvider key={index} data={tvProvider} />
        </div>
      ))}
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
