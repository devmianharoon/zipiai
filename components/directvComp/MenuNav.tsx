import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: "/assets/images/directv.png",
    text: "DIRECTV via Internet",
  },
  {
    image: "/assets/images/directv1.png",
    text: "DIRECTV via Satellite",
  },
  {
    image: "/assets/images/directv2.png",
    text: "Internet",
  },
  {
    image: "/assets/images/directv3.png",
    text: "Wireless",
  },
];

const MenuNav = () => {
  return (
    <section className="w-full md:flex justify-center items-center py-6 hidden">
      <div className="container">
        <ul className="flex justify-center items-center gap-14 text-[14px]">
          {data.map((e, index) => {
            return (
              <li
                className="flex flex-col justify-center items-center gap-1.5"
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
};

export default MenuNav;
