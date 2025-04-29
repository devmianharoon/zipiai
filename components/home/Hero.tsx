import QuestionTiles from "../common/Question";
// import HeroFilter from "./HeroFilter";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-bluish">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-wrap">
          <div className="w-full lg:w-full">
            {/* <HeroFilter /> */}
            <div className="home_content ">
              <h2 className="fz55 ">The Best Internet Near Me</h2>
              <QuestionTiles />
              <div className="absolute bottom-0 right-0">
                <h1 className="text-[44px] text-white m-0">Moving ?</h1>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="py-[10px] px-[20px] rounded-lg outline-none border-none  bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
