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
import Image from "next/image";

export default function ServiceTiles() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Gemini Air Section */}
      <div className="mt-12 rounded-lg overflow-hidden text-white">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 p-8">
          {/* Image Section */}
          <div className="relative w-full h-64 md:h-auto flex items-center justify-center">
            <Image
              src="/assets/Mask-group.png"
              alt="Gemini Air Device"
              fill
              className="object-contain"
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-center px-[20px] py-[30px] md:px-[45px] md:py-[40px] text-center lg:text-start">
            {/* <p className="text-[14px] lg:text-base lg:text-[16px] font-medium text-[var(--color-blue)]">
              GEMINI AIR
            </p> */}
            <h2 className="text-3xl lg:text-[42px] font-bold mb-4">
              One Device. Total Control. <br />
              Endless Entertainment.
            </h2>
            <p className="mb-6 text-[14px] lg:text-base lg:text-[16px]  font-medium">
              Where Live TV meets smart streaming. Gemini Air delivers DirecTV
              in a sleek entertainment powerhouse.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
              <button className="bg-[var(--color-red)] text-white py-2 px-4 rounded-full font-medium transition-colors">
                Learn More
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
