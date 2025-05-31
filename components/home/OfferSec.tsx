import Image from "next/image";
import Link from "next/link";
import React from "react";

const OfferSec = () => {
  return (
    <>
      <section className="w-full text-center py-12">
        <p className="text-[var(--color-blue)]">What we offer</p>
        <h1 className="py-6">
          Fast. Reliable. <br /> Available everywhere.
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="container grid grid-cols-12 gap-28">
            <div className=" Blog h-[620px] w-[675px] box-border flex flex-col justify-between items-center col-span-6">
              <Image
                src={"/assets/images/blog1.png"}
                alt={"hello"}
                height={475}
                width={675}
                className="rounded-[10px]"
              />
              <div className="w-[460px]">
                <h3 className="py-4 leading-[32px]">
                  Cable internet — Good for streaming TV, family entertainment
                </h3>
                <Link
                  href={"/"}
                  className="text-[var(--color-blue)] py-2 hover:border-b hover:border-[var(--color-red)]">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="Blog h-[620px] w-[675px] box-border flex flex-col justify-between items-center col-span-6">
              <Image
                src={"/assets/images/blog2.png"}
                alt={"hello"}
                height={475}
                width={675}
                className="rounded-[10px]"
              />
              <div className="w-[460px]">
                <h3 className="py-4 leading-[32px]">
                  Cable internet — Good for streaming TV, family entertainment
                </h3>
                <Link
                  href={"/"}
                  className="text-[var(--color-blue)] py-2 hover:border-b hover:border-[var(--color-red)]">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="Blog h-[620px] w-[675px] box-border flex flex-col justify-between items-center col-span-6">
              <Image
                src={"/assets/images/blog3.png"}
                alt={"hello"}
                height={475}
                width={675}
                className="rounded-[10px]"
              />
              <div className="w-[460px]">
                <h3 className="py-4 leading-[32px]">
                  Cable internet — Good for streaming TV, family entertainment
                </h3>
                <Link
                  href={"/"}
                  className="text-[var(--color-blue)] py-2 hover:border-b hover:border-[var(--color-red)]">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="Blog h-[620px] w-[675px] box-border flex flex-col justify-between items-center col-span-6">
              <Image
                src={"/assets/images/blog4.png"}
                alt={"hello"}
                height={475}
                width={675}
                className="rounded-[10px]"
              />
              <div className="w-[460px]">
                <h3 className="py-4 leading-[32px]">
                  Cable internet — Good for streaming TV, family entertainment
                </h3>
                <Link
                  href={"/"}
                  className="text-[var(--color-blue)] py-2 hover:border-b hover:border-[var(--color-red)]">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferSec;
