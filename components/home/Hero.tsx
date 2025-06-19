"use client";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Searchbtn from "../buttonComp/Searchbtn";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import MovingH from "./movingH";
// import MovingH from "./movingH";

export default function Hero() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSpeedTestClick = () => {
    if (pathname === "/speed-test") {
      // We're already on the speed-test page, scroll to the section
      const section = document.getElementById("speed-test");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Go to the speed-test page, and scroll after it loads
      router.push("/speed-test#speed-test");
    }
  };

  const { zipCode, loading } = useSelector(
    (state: RootState) => state.location
  );
  const handleClick = () => {
    if (loading) {
      alert("Please wait, fetching your location...");
      return;
    }
    if (!zipCode) {
      alert(
        "No zip code available. Please enter a zip code or allow location access."
      );
      return;
    }
    router.push(`/${zipCode}`);
  };
  return (
    <section className="w-full md:h-[660px] h-[660px]  box-border relative bg-cover bg-center bg-no-repeat   bg-[var(--color-bg-primary)]  md:pt-[55px] ">
      <div className="container mx-auto px-4  ">
        <div className="w-full lg:w-full flex justify-center items-center ">
          <div className="home_content w-[600px] text-center">
            <h1 className="text-[38px] md:text-[50px]   text-primary font-[600] pt-16 pb-4 text-[var(--color-black)]">
              We Find the Best Internet Providers and Plans Near You
            </h1>
            <p className="inline-block py-2 md:py-4 text-[var(--color-black)]  md:text-[18px] font-[400] text-[16px] w-[352px] md:w-[480px]  ">
              Explore internet providers, compare options, and choose the perfect plan in a few easy clicks
            </p>
            <p className="py-4 text-[var(--color-black)] font-[600] text-[20px]">
              Search Your Current Location 
            </p>
            <div>
              <div className="rightSection">
                <div className="inputSection">
                  <Searchbtn
                    text={
                      <span className="flex items-center justify-center gap-2">
                        <Image
                          src={"/assets/images/icons/search-white.png"}
                          alt="icon"
                          height={18}
                          width={18}
                        />
                        Search Now
                      </span>
                    }
                    onClick={handleClick}
                    wclass="w-[195px]"
                    hpclass="h-[56px]"
                    bgColor="bg-[var(--color-red)]"
                  />
                </div>

                <div className="flex items-center justify-center gap-[30px] py-8 md:pt-12 px-6 md:px-0 text-[14px] font-[500] md:text-[18px] ">
                  <span className="text-[var(--color-black)] flex flex-col md:flex-row justify-center items-center gap-2">
                    <Image
                      src={"/assets/images/icons/fast.png"}
                      alt={"icon"}
                      height={24}
                      width={24}
                    />
                    Fast speed
                  </span>
                  <span className="text-[var(--color-black)] flex flex-col md:flex-row justify-center items-center gap-2">
                    <Image
                      src={"/assets/images/icons/buffer-free.png"}
                      alt={"icon"}
                      height={24}
                      width={24}
                    />
                    Buffer-free Streaming
                  </span>
                  <span className="text-[var(--color-black)] flex flex-col md:flex-row justify-center items-center gap-2">
                    <Image
                      src={"/assets/images/icons/gaming.png"}
                      alt={"icon"}
                      height={24}
                      width={24}
                    />
                    Live gaming & sports
                  </span>
                </div>

                <div className="hidden md:block  md:h-[220px] h-[190px] w-full absolute bottom-0 left-0">
                  <Image
                    src={"/assets/images/Bg.png"}
                    alt={"dd"}
                    fill
                    objectFit="cover"
                    className="opacity-[.4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* moving section absoluted */}

        <div className="lg:absolute w-full lg:top-4 lg:left-4 ">
          {/* <MovingH /> */}
          <MovingH theme ={"light"} />
        </div>
        {/* test speed section absolute */}
        <div className=" h-[185px] w-[372px] md:w-[786px] md:h-[100px]  rounded-[12px] md:-bottom-[48px] -bottom-[295px] p-4 md:py-5 md:px-5 absolute flex flex-col md:flex-row justify-center items-center bg-[#FF0000] z-40 left-1/2 -translate-x-1/2  md:gap-8 gap-4 bg-[linear-gradient(to_right,#0C0A1D,#FF0000)] text-center md:text-left text-[20px] md:text-[48px]">
          <h3 className="text-[var(--color-white)] md:text-[24] text-[20px] md:leading-[32px] leading-[28px] font-[600]">
            Don&apos;t let your internet slow you down. Test Your Speed!
          </h3>
          <Searchbtn
            text="Check My Speed"
            onClick={handleSpeedTestClick}
            wclass="w-[203px]"
            hpclass="h-[57px] text-[18px] font-medium"
            // bgColor="bg-[var(--color-black)]"
            style={{
              borderRadius: "40px",
              backgroundImage:
                "linear-gradient(0deg, #FFF 0%, #FFF 100%), url(/bg-b-b.png)",
              backgroundColor: "lightgray",
              backgroundPosition: "-55.172px -311px",
              backgroundSize: "341.77% 882.456%",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "darken, normal",
            }}
          />
        </div>
      </div>
    </section>
  );
}
