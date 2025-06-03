type HeroBannerProps = {
  title?: string;
  subtitle?: string;
  description?: string;
};
export default function HeroBanner({ data }: { data: HeroBannerProps }) {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat "
        style={{
          backgroundImage: "url('/assets/images/directv/bg-directv-page.webp')",
        }}></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h2 className="text-xl md:text-[48px] font-[600] leading-[56px] tracking-[-1.44px] mb-4 text-white">
          {data.title}
        </h2>
        <h1 className="  font-[600] mb-8  text-white ">{data.subtitle}</h1>
        <p className="text-base font-medium lg:text-[22px] md:text-2xl mb-8 text-white">
          {data.description}
        </p>
        <button className="w-46 bg-redish bg-[var(--color-red)] text-white py-2.5 px-2.5  font-[700] text-[16px]   cursor-pointer rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Now
        </button>
      </div>
    </div>
  );
}
