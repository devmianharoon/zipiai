"use client";
import Image from "next/image";

export default function OneDevice() {
  return (
    <div className="w-full  mx-auto bg-[#0B6BDD1A] ">
      {/* Gemini Air Section */}
      <div className="w-full  mx-auto px-[17px] lg:px-0 ">
        <div className="mt-12 rounded-lg overflow-hidden text-white">
          <div className="flex justify-center  ">
            {/* Text Section */}
            <div className="flex  !w-[694px] flex-col justify-center pt-[150px] pl-[20px] pb-[144px]  text-center lg:text-start ">
              {/* <p className="text-[14px] lg:text-base lg:text-[16px] font-medium text-[var(--color-blue)]">
              GEMINI AIR
            </p> */}
              <h2 className="text-[42px] leading-[52px] tracking-[-0.84px] font-[600]  text-[#030A13]  mb-7">
                One device. Total control. <br /> Endless entertainment.
              </h2>
              <p className="text-[16px] leading-[26px] tracking-[-0.16px] font-[500] text-[#030A13] mb-[20px]">
                Stream all your content from your favorite apps in one place –
                no satellite dish needed.
              </p>

              <ul className="space-y-2 mb-15 inline-flex flex-col items-start gap-[15px]">
                <li className="flex items-start !p-0">
                  <div className="flex gap-[10px] items-start">
                    <Image
                      src={"/assets/verified.svg"}
                      alt="verified"
                      width={22}
                      height={22}
                      className="mt-1"
                    />
                    <p className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-[#030A13]">
                      <p className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] text-[#030A13] leading-trim text-edge-cap">
                        All Your Apps in One Place Stream
                      </p>
                      DirecTV and top apps like Netflix, Max, and YouTube from
                      one easy interface.
                    </p>
                  </div>
                </li>
                <li className="flex items-start !p-0">
                  <div className="flex gap-[10px] items-start">
                    <Image
                      src={"/assets/verified.svg"}
                      alt="verified"
                      width={22}
                      height={22}
                      className="mt-1"
                    />
                    <p className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-[#030A13]">
                      <p className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] text-[#030A13] leading-trim text-edge-cap">
                        Voice Remote with Google Assistant
                      </p>
                      Search shows, control volume, and even turn off your
                      lights — hands-free.
                    </p>
                  </div>
                </li>
                <li className="flex items-start !p-0">
                  <div className="flex gap-[10px] items-start">
                    <Image
                      src={"/assets/verified.svg"}
                      alt="verified"
                      width={22}
                      height={22}
                      className="mt-1"
                    />
                    <p className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-[#030A13]">
                      <p className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] text-[#030A13] leading-trim text-edge-cap">
                        No Satellite Dish Required
                      </p>
                      Stream everything over Wi-Fi — no dish or cables needed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start !p-0">
                  <div className="flex gap-[10px] items-start">
                    <Image
                      src={"/assets/verified.svg"}
                      alt="verified"
                      width={22}
                      height={22}
                      className="mt-1"
                    />
                    <p className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-[#030A13]">
                      <p className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] text-[#030A13] leading-trim text-edge-cap">
                        Easy Cloud DVR & Lookback
                      </p>
                      Record with one click or rewind up to 72 hours of live TV.
                    </p>
                  </div>
                </li>
                <li className="flex items-start !p-0">
                  <div className="flex gap-[10px] items-start">
                    <Image
                      src={"/assets/verified.svg"}
                      alt="verified"
                      width={22}
                      height={22}
                      className="mt-1"
                    />
                    <p className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-[#030A13]">
                      <p className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] text-[#030A13] leading-trim text-edge-cap">
                        Quick Setup, Familiar Feel
                      </p>
                      Plug it in and go — with a cable-style remote and home
                      screen you already know.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex self-start items-center gap-[25px] ">
                <button
                  onClick={() => window.open(`tel:1800-123-4567`)}
                  className="w-[208px] h-[50px] mx-auto  bg-[var(--color-red)] text-white  rounded-full text-base font-medium  transition-colors">
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src="/call-w.svg"
                      alt="phone"
                      width={24}
                      height={24}
                      className="mt-1"
                    />
                    <span className="text-lg font-medium">Call Now</span>
                  </div>
                </button>
                <a
                  href="#"
                  className="underline text-lg text-[var(--color-red)] text-center sm:text-left">
                  Have Your Own Device?
                </a>
              </div>
            </div>
            {/* Image Section */}
            <div className="relative min-w-[619px]  h-[480px]  pt-[128px] pb-[142px] ">
              <Image
                src="/assets/OneMoreTime.png"
                alt="Gemini Air Device"
                className="object-cover rounded-[24px]"
                width={541}
                height={630}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
