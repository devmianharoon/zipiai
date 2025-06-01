import Image from "next/image";
import Link from "next/link";
export default function TopNavigation() {
  const data = [
    {
      image: "/assets/directv.png",
      text: "DirecTV via Internet",
    },
    {
      image: "/assets/directv1.png",
      text: "DirecTV via Satellite",
    },
    {
      image: "/assets/directv2.png",
      text: "Internet",
    },
  ];

  return (
    <section className="w-full  md:flex justify-center items-center py-6 px-[17px] bg-[var(--color-blue)]">
      <div className="container">
        <ul className="flex justify-around items-center text-[14px]  lg:max-w-6xl lg:mx-auto">
          {data.map((e, index) => {
            return (
              <li
                className="flex flex-col justify-center items-center gap-1.5 text-white cursor-pointer"
                key={index}>
                <Image src={e.image} alt={"directv"} height={30} width={38} />
                <Link href={"/"}><p className="text-white text-base text-[14px] lg:text-base font-semibold">{e.text}</p></Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
