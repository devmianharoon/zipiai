import HeroFilter from "./HeroFilter";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-bluish">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-wrap">
          <div className="w-full lg:w-full">
            <HeroFilter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
