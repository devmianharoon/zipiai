"use client";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";

import Image from "next/image";
import Moving from "./Moving";

export default function Hero() {
  const router = useRouter();
  const { zipCode } = useSelector((state: RootState) => state.location);
  const handleClick = () => {
    router.push(`/${zipCode}`);
  };
  return (
    <section className="w-full h-[720px]  box-border relative bg-cover bg-center bg-no-repeat  pt-26 bg-[var(--color-blue)] bg-[linear-gradient(to_bottom,#0F2774,#1D49DA)] ">
      <div className="container mx-auto px-4  ">
        <div className=" flex flex-wrap">
          <div className="w-full lg:w-full flex justify-center items-center ">
            <div className="home_content w-[670px] text-center">
              <h1 className="text-[38px] md:text-[48px]   text-primary font-[600] pt-16 pb-4 text-[var(--color-white)]">
                Find The Best Internet Providers Near Me!
              </h1>
              <p className="inline-block py-2 md:py-4 px-6 md:px-26 text-[var(--color-white)]  text-[18px] font-[400] ">
                Search providers , compare plains and order service in just a
                few easy clicks
              </p>
              <p className="font-medium py-4 text-[var(--color-white)] text-[16px] ">
                Search your current location
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
                          Search now
                        </span>
                      }
                      onClick={handleClick}
                      wclass="w-[195px]"
                      hpclass="h-[56px]"
                      bgColor="bg-[var(--color-red)]"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-[30px] py-8 md:pt-12 px-6 md:px-0 text-[18px] font-medium">
                    <span className="text-[var(--color-white)] flex flex-col md:flex-row justify-center items-center gap-2">
                      <Image
                        src={"/assets/images/icons/fast.png"}
                        alt={"icon"}
                        height={24}
                        width={24}
                      />
                      Fast speed
                    </span>
                    <span className="text-[var(--color-white)] flex flex-col md:flex-row justify-center items-center gap-2">
                      <Image
                        src={"/assets/images/icons/buffer-free.png"}
                        alt={"icon"}
                        height={24}
                        width={24}
                      />
                      Buffer-free Streaming
                    </span>
                    <span className="text-[var(--color-white)] flex flex-col md:flex-row justify-center items-center gap-2">
                      <Image
                        src={"/assets/images/icons/gaming.png"}
                        alt={"icon"}
                        height={24}
                        width={24}
                      />
                      Live gaming & sports
                    </span>
                  </div>

                  <div className="md:h-[180px] h-[200px] w-full absolute bottom-0 left-0">
                    <Image
                      src={"/assets/images/herowaves.png"}
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
        </div>
        {/* moving section absoluted */}

        <div className="lg:absolute w-full lg:top-40 lg:left-4">
          <Moving
            bgClass="bg-[var(--color-black)]"
            bgClassBtn="bg-[var(--color-red)]"
          />
        </div>

        {/* test speed section absolute */}
        <div className=" h-[185px] w-[372px] md:w-[896px] md:h-[140px]  rounded-[12px] md:-bottom-[65px] -bottom-[295px] p-4 md:py-12 md:px-4 absolute flex flex-col md:flex-row justify-center items-center bg-[#FF0000] z-40 left-1/2 -translate-x-1/2  md:gap-4  bg-[linear-gradient(to_right,#0C0A1D,#FF0000)] text-center md:text-left text-[20px] md:text-[48px]">
          <h3 className="text-[var(--color-white)] leading-[30px]">
            Don&apos;t let your internet slow you down. Test Your Speed!
          </h3>
          <Searchbtn
            text="Check my speed"
            onClick={handleClick}
            wclass="w-[203px]"
            hpclass="h-[57px] text-[18px] font-medium"
            bgColor="bg-[var(--color-black)]"
          />
        </div>
      </div>
    </section>
  );
}
