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
    <section className="w-full md:flex justify-center items-center py-6 hidden bg-bluish">
      <div className="container">
        <ul className="flex justify-center items-center gap-14 text-[14px]">
          {data.map((e, index) => {
            return (
              <li
                className="flex flex-col justify-center items-center gap-1.5 text-white cursor-pointer"
                key={index}>
                <Image src={e.image} alt={"directv"} height={34} width={34} />
                <Link href={"/"}>{e.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
