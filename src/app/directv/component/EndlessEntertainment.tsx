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
    <div className="w-full h-[1000px] mx-auto mt-[160px] bg-[url('/assets/endlessentertainment.png')] bg-cover bg-left ">
      {/* Gemini Air Section */}
      <div className="rounded-lg text-white">
        <div className="flex justify-center items-center gap-[41px] ">
          {/* Image Section */}
          <div className="relative min-w-[619px] h-[480px]">
            <Image
              src="/assets/directtv.png"
              alt="Gemini Air Device"
              className="absolute bottom-[-160px] left-1/7 -translate-x-1/2 object-cover"
              width={195}
              height={37}
            />
          </div>
          {/* Text Section */}
          <div className="flex !w-[694px] pt-[124px] flex-col justify-center pl-[20px]  text-center lg:text-start text-white">
            {/* <p className="text-[14px] lg:text-base lg:text-[16px] font-medium text-[var(--color-blue)]">
    GEMINI AIR
  </p> */}

            <h2 className="text-[42px] leading-[52px] tracking-[-0.84px] font-[600] mb-7 text-white">
              One device. Total control. <br /> Endless entertainment.
            </h2>

            <p className="text-[16px] leading-[26px] tracking-[-0.16px] font-[500] mb-[36px] text-white">
              Stream all your content from your favorite apps in one place – no
              satellite dish needed.
            </p>

            <h3 className="text-[24px] leading-[32px] tracking-[-0.24px] pb-[25px] font-[600] text-white">
              Why It’s a Game-Changer
            </h3>

            <ul className="space-y-2 mb-15 inline-flex flex-col items-start gap-[15px]">
              {[
                {
                  title: "All Your Apps in One Place Stream",
                  desc: "DirecTV and top apps like Netflix, Max, and YouTube from one easy interface.",
                },
                {
                  title: "Voice Remote with Google Assistant",
                  desc: "Search shows, control volume, and even turn off your lights — hands-free.",
                },
                {
                  title: "No Satellite Dish Required",
                  desc: "Stream everything over Wi-Fi — no dish or cables needed.",
                },
                {
                  title: "Easy Cloud DVR & Lookback",
                  desc: "Record with one click or rewind up to 72 hours of live TV.",
                },
                {
                  title: "Quick Setup, Familiar Feel",
                  desc: "Plug it in and go — with a cable-style remote and home screen you already know.",
                },
              ].map((item, index) => (
                <li className="flex items-start !p-0" key={index}>
                  <div className="flex gap-[10px] items-start">
                    <Image
                      src="/assets/verified.svg"
                      alt="verified"
                      width={22}
                      height={22}
                      className="mt-1"
                    />
                    <div className="text-[16px] font-[500] leading-[24px] tracking-[-0.16px] text-white">
                      <p className="text-[16px] font-[700] leading-[24px] tracking-[-0.16px] leading-trim text-edge-cap text-white">
                        {item.title}
                      </p>
                      {item.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex self-start items-center gap-[25px]">
              <button
                onClick={() => window.open(`tel:1800-123-4567`)}
                className="w-[208px] h-[50px] mx-auto bg-[var(--color-red)] text-white rounded-full text-base font-medium transition-colors">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/call-w.svg"
                    alt="phone"
                    width={24}
                    height={24}
                    className="mt-1"
                  />
                  <span className="text-lg font-medium text-white">
                    Call Now
                  </span>
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
