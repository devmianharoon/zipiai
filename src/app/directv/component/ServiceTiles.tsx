// import Image from "next/image";
// export default function ServiceTiles() {
//   return (
//     <div className=" w-full max-w-6xl mx-auto ">
//       {/* Gemini Air Section */}
//       <div className="mt-12  rounded-lg overflow-hidden text-white">
//         <div className="lg:grid grid-cols-1 md:grid-cols-2  p-8">
//           <div className="flex relative w-full items-center justify-center">
//             <Image
//               src="/assets/Mask-group.png"
//               alt="Gemini Air Device"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <div className="flex flex-col justify-center px-[45px] py-[40px]">
//             <p className="text-lg font-medium mb-2 text-[var(--color-blue)]">
//               GEMINI AIR
//             </p>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Pick the better way to watch it all
//             </h2>
//             <p className="mb-6 ">
//               Stream all your content from your favorite apps in one place – no
//               satellite needed.*
//             </p>
//             <div className="flex justify-between items-center ">
//               <button className=" bg-[var(--color-red)]  py-2 px-4 rounded-md font-medium transition-colors">
//                 Learn More
//               </button>
//               <a
//                 href="#"
//                 className=" underline text-lg text-[var(--color-red)]"
//               >
//                 Have Your Own Device?
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";

export default function ServiceTiles() {
  return (
    <div className="w-full mx-auto pt-[140px]">
      {/* Gemini Air Section */}
      <div className="rounded-lg text-white">
        <div className="flex justify-center gap-[41px] ">
          {/* Image Section */}
          <div className="relative min-w-[619px]  h-[480px]   ">
            <Image
              src="/assets/movietime.jpg"
              alt="Gemini Air Device"
              fill
              className="object-cover rounded-[24px]"
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col min-w-[619px] justify-center   text-center lg:text-start ">
            {/* <p className="text-[14px] lg:text-base lg:text-[16px] font-medium text-[var(--color-blue)]">
              GEMINI AIR
            </p> */}
            <h2 className="leading-[32px] tracking-[-0.24px] lg:text-[24px] font-[600] mb-7">
              Whether you’re at home or on the go, DirecTV keeps you connected
              to the entertainment you love. Stream live TV and on-demand
              content effortlessly across all your favorite devices:
            </h2>
            <ul className="space-y-2 mb-15 inline-flex flex-col items-start gap-[15px]">
              <li className="flex items-start !p-0">
                <div className="flex gap-[10px]">
                  <Image
                    src={"/assets/verified.svg"}
                    alt="verified"
                    width={22}
                    height={22}
                  />
                  <p className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-[#030A13]">
                    <span className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] text-[#030A13] leading-trim text-edge-cap">
                      Smart TVs –
                    </span>
                    Seamlessly integrated streaming for a cinematic experience 
                  </p>
                </div>
              </li>
              <li className="flex items-start !p-0">
                <div className="flex gap-[10px]">
                  <Image
                    src={"/assets/verified.svg"}
                    alt="verified"
                    width={22}
                    height={22}
                  />
                  <p className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-[#030A13]">
                    <span className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] text-[#030A13] leading-trim text-edge-cap">
                      Tablets & Smartphones –
                    </span>
                    Take your shows with you, wherever you are
                  </p>
                </div>
              </li>
              <li className="flex items-start !p-0">
                <div className="flex gap-[10px]">
                  <Image
                    src={"/assets/verified.svg"}
                    alt="verified"
                    width={22}
                    height={22}
                  />
                  <p className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-[#030A13]">
                    <span className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] text-[#030A13] leading-trim text-edge-cap">
                      Streaming Devices –
                    </span>
                    Compatible with Roku, Amazon Fire Stick, and more
                  </p>
                </div>
              </li>
              <li className="flex items-start !p-0">
                <div className="flex gap-[10px]">
                  <Image
                    src={"/assets/verified.svg"}
                    alt="verified"
                    width={22}
                    height={22}
                  />
                  <p className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-[#030A13]">
                    <span className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] text-[#030A13] leading-trim text-edge-cap">
                      Laptops & Desktops –
                    </span>
                    Watch from any browser without missing a beat
                  </p>
                </div>
              </li>
              <li className="flex items-start !p-0">
                <div className="flex gap-[10px]">
                  <Image
                    src={"/assets/verified.svg"}
                    alt="verified"
                    width={22}
                    height={22}
                  />
                  <p className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-[#030A13]">
                    <span className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] text-[#030A13] leading-trim text-edge-cap">
                      Gemini Air -
                    </span>
                    The ultimate entertainment powerhouse in one easy to use
                    device
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex self-start items-center gap-[25px] ">
              <button
                onClick={() => window.open(`tel:1800-123-4567`)}
                className="w-[208px] h-[50px] mx-auto  bg-[var(--color-red)] text-white  rounded-full text-base font-medium  transition-colors">
                <div className="flex justify-center items-center gap-2">
                  <Image src="/call-w.svg" alt="phone" width={24} height={24} />
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
        </div>
      </div>
    </div>
  );
}
