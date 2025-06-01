type HeroBannerProps = {
  title?: string;
  subtitle?: string;
  description?: string;
};
export default function HeroBanner({ data }: { data: HeroBannerProps }) {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/assets/images/directv/tvpagebanner.jpeg')",
          backgroundBlendMode: "overlay",
        }}
      >
        
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-[var(--color-white)] mb-4">
          {data.title}
        </h1>
        <h3 className=" mb-8 text-[var(--color-white)]">
          {data.subtitle}
        </h3>
        <p className="text-xl md:text-2xl mb-8">{data.description}</p>
        
      </div>
    </div>
  );
}
