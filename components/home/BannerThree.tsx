import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";
import Image from "next/image";

type HeroBannerProps = {
  title?: string;
  description?: string;
};
export default function BannerThree({ data }: { data: HeroBannerProps }) {
  const router = useRouter();
  return (
    <div className="relative w-full md:h-[800px] h-[630px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/assets/images/tv-screen2.jpg')",
          backgroundBlendMode: "overlay",
        }}>
        {/* Overlay with stadium light effect */}
      </div>

      {/* Content */}
      <div className="absolute left-1/2 top-1/5 -translate-x-1/2 h-full flex flex-col items-center justify-center text-center text-white px-4 z-10 md:w-[887px]  min-w-[373px] w-full">
        <h2 className=" mb-4 text-[var(--color-white)] md:text-[80px] text-[38px] leading-[48px] md:leading-[90px]">
          {data.title}
        </h2>

        <p className=" mb-8 text-[var(--color-white)] text-[16px] leading-[26px] font-[400] md:text-[22px] md:leading-[32px] w-[373px] md:w-full ">
          {data.description}
        </p>
        <Searchbtn
          text={"Learn more"}
          bgColor="bg-[var(--color-red)] "
          wclass=""
          hpclass="py-[21px] px-[28px] text-[18px] font-[500] leading-[14.4px]"
          onClick={() => router.push("/directv")}
        />
        <div className="mt-4 flex justify-center">
          <Image
            src="/assets/images/directv1.png"
            alt="DirecTV Logo"
            width={60}
            height={20}
            className="object-contain hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
