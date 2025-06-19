import Image from "next/image";
import React from "react";

const Blogs = () => {
  return (
    <section className="w-full flex justify-center items-center py-26">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-[var(--color-blue)] py-2.5">Blogs & Articles</p>
          <div className="flex justify-center items-center">
            <h1 className="text-[30px] font-[600] leading-[38px] py-2 w-[264px] md:w-full md:text-[42px] md:leading-[52px]">
              Our Commitment to Helping You. <br /> Support You Can Trust.
            </h1>
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full flex justify-center items-center">
          <div className="py-10 flex flex-col lg:flex-row justify-center items-center gap-8">
            {/* Card 1 */}
            <div className="w-[360px] h-[450px]">
              <div className="relative w-[360px] h-[351px]">
                <Image
                  src={"/assets/images/b1.png"}
                  alt={"dd"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[12px]"
                />
                <span className="tag bg-[var(--color-red)] rounded-[20px] py-[5px] px-[12px] inline-flex justify-center items-center  text-white absolute top-4 right-4">
                  Support
                </span>
              </div>
              <div className="text-center py-4">
                <p className="md:text-[18px] text-[16px] font-[400] leading-[24px] md:leading-[28px] px-3">
                  Friendly support agents are here to help you compare internet providers, answer questions, and find the best plans near you.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[360px] h-[470px]">
              <div className="relative w-[360px] h-[351px]">
                <Image
                  src={"/assets/images/b2.png"}
                  alt={"dd"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[12px]"
                />
                <span className="tag bg-[var(--color-red)] rounded-[20px] py-[5px] px-[12px] inline-flex justify-center items-center  text-white absolute top-4 right-4">
                  Blog
                </span>
              </div>
              <div className="text-center py-4">
                <p className="md:text-[18px] text-[16px] font-[400] leading-[24px] md:leading-[28px] px-3">
                  Our blog keeps you informed with the latest tips, provider news, and updates to help you choose the best internet plans in your area.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[360px] h-[450px]">
              <div className="relative w-[360px] h-[351px]">
                <Image
                  src={"/assets/images/b3.png"}
                  alt={"dd"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[12px]"
                />
                <span className="tag bg-[var(--color-red)] rounded-[20px] py-[5px] px-[12px] inline-flex justify-center items-center  text-white absolute top-4 right-4">
                  Article
                </span>
              </div>
              <div className="text-center py-4">
                <p className="md:text-[18px] text-[16px] font-[400] leading-[24px] md:leading-[28px] px-3">
                  Learn more. Find answers fast with step-by-step guides, understanding plans, and tips to choose the right internet provider near you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
