import Searchbtn from "../buttonComp/Searchbtn";

type HeroBannerProps = {
  title?: string;
  description?: string;
};
export default function BannerThree({ data }: { data: HeroBannerProps }) {
  return (
    <div className="relative w-full h-[1100px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/assets/images/bannerthree.png')",
          backgroundBlendMode: "overlay",
        }}>
        {/* Overlay with stadium light effect */}
      </div>

      {/* Content */}
      <div className="absolute left-1/2 top-1/8 -translate-x-1/2 h-full flex flex-col items-center justify-center text-center text-white px-4 z-10 w-[887px]">
        <h1 className=" mb-4 text-[var(--color-white)] text-[80px] leading-[90px]">{data.title}</h1>

        <p className=" mb-8 text-[var(--color-white)] text-[22px] leading-[32px]">{data.description}</p>
        <Searchbtn
          text={"Learn more"}
          bgColor="bg-[var(--color-red)] "
          wclass="w-[180px]"
        />
      </div>
    </div>
  );
}
