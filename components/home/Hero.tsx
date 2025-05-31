"use client";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";
import Moving from "./Moving";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  const { zipCode } = useSelector((state: RootState) => state.location);
  const handleClick = () => {
    router.push(`/${zipCode}`);
  };
  return (
    <section className="w-full h-[720px] box-border relative bg-cover bg-center bg-no-repeat  py-16 bg-[var(--color-blue)] bg-[linear-gradient(to_bottom,#0F2774,#1D49DA)] ">
      <div className="container mx-auto px-4  ">
        <div className=" flex flex-wrap">
          <div className="w-full lg:w-full flex justify-center items-center ">
            <div className="home_content w-[670px] text-center">
              <h1 className="fz55  text-primary font-bold py-8 text-[var(--color-white)]">
                We find the best internet provider and plans near you!
              </h1>
              <p className="inline-block py-4 text-[var(--color-white)]">
                Search providers , compare plains and order service in just a
                few easy clicks
              </p>
              <p className="font-bold py-4 text-[var(--color-white)]">
                Search your current location
              </p>
              <div>
                <div className="rightSection">
                  <div className="inputSection">
                    {/* <Link
                      href={`/${zipCode}`}
                      style={{ borderRadius: "40px" }}
                      
                      className="bg-redish text-white py-2.5 px-2.5 w-46 font-[900] text-[18px] border-redish border-2 rounded-md cursor-pointer hover:border-redish hover:bg-white hover:text-redish transition-all duration-300 ease-in-out flex items-center justify-center"
                    >
                      {"Submit"}
                    </Link> */}
                    {/* onClick={handleClick} this was in button causin    error*/}

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
                      bgColor="bg-[var(--color-red)]"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-[30px] py-8 ">
                    <p className="text-[var(--color-white)] flex justify-center items-center gap-2">
                      <Image
                        src={"/assets/images/icons/fast.png"}
                        alt={"icon"}
                        height={24}
                        width={24}
                      />
                      Fast speed
                    </p>
                    <p className="text-[var(--color-white)] flex justify-center items-center gap-2">
                      <Image
                        src={"/assets/images/icons/buffer-free.png"}
                        alt={"icon"}
                        height={24}
                        width={24}
                      />
                      Buffer-free Streaming
                    </p>
                    <p className="text-[var(--color-white)] flex justify-center items-center gap-2">
                      <Image
                        src={"/assets/images/icons/gaming.png"}
                        alt={"icon"}
                        height={24}
                        width={24}
                      />
                      Live gaming & sports
                    </p>
                  </div>

                  <div className="h-[255px] w-full absolute bottom-0 left-0">
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
        <div className="absolute w-full top-36 left-4">
          <Moving
            bgClass={"bg-[var(--color-red)]"}
            bgClassBtn={"bg-[var(--color-black)]"}
          />
        </div>
        {/* test speed section absolute */}
        <div className="w-[896px] h-[140px] rounded-[12px] bottom-[-65px] py-12 px-8 absolute flex justify-center items-center bg-[#FF0000] z-40 left-1/2 -translate-x-1/2  gap-[131px] bg-[linear-gradient(to_right,#0C0A1D,#FF0000)] ">
          <h3 className="text-[var(--color-white)] leading-[30px]">
            Time is precious ! Dont let yout internet <br /> slow you down .
            Test your speed!
          </h3>
          <Searchbtn
            text="Check my speed"
            onClick={handleClick}
            wclass="w-[203px]"
            bgColor="bg-[var(--color-black)]"
          />
        </div>
      </div>
    </section>
  );
}
