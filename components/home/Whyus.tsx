import Image from "next/image";
import React from "react";

const Whyus = () => {
  return (
    <section className="w-full flex items-center justify-center py-28 ">
      <div className="container flex justify-center items-center py-4">
        <div className="w-[850px] h-[470px] text-center py-8">
          <p className="text-[var(--color-blue)]">Why choose Hyper G</p>
          <h2 className="leading-[48px] pt-3 pb-8">
            We partner with leading internet providers so you&apos;re guaranteed
            accurate plans and prices.
          </h2>
          <div className="flex">
            <div className="circle h-[326px] w-[326px] rounded-[50%] border border-[var(--color-silver)] text-center flex justify-center items-center ">
              <div className="flex flex-col justify-center items-center gap-[30px]">
                <Image
                  src={"/assets/images/icons/circle1.png"}
                  alt={"hh"}
                  height={74}
                  width={74}
                />
                <p>
                  Search for best internet <br />
                  plans nearby
                </p>
              </div>
            </div>

            <div className="circle h-[326px] w-[326px] rounded-[50%] border border-[var(--color-silver)] text-center flex justify-center items-center mx-[-40px]">
              <div className="flex flex-col justify-center items-center gap-[30px]">
                <Image
                  src={"/assets/images/icons/circle2.png"}
                  alt={"hh"}
                  height={74}
                  width={74}
                />
                <p>
                  Search for best internet <br />
                  plans nearby
                </p>
              </div>
            </div>

            <div className="circle h-[326px] w-[326px] rounded-[50%] border border-[var(--color-silver)] text-center flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-[30px]">
                <Image
                  src={"/assets/images/icons/circle3.png"}
                  alt={"hh"}
                  height={74}
                  width={74}
                />
                <p>
                  Search for best internet <br />
                  plans nearby
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
