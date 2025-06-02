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
              Building trust by our services
            </h1>
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full flex justify-center items-center">
          <div className="py-10 flex flex-col lg:flex-row justify-center items-center gap-5">
            {/* Card 1 */}
            <div className="w-[360px] h-[417px]">
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
                <p className="md:text-[18px] text-[16px] font-[500] leading-[24px] md:leading-[28px] px-3">
                  Hyper G available and reply instantly to your queries
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[360px] h-[417px]">
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
                <p className="md:text-[18px] text-[16px] font-[500] leading-[24px] md:leading-[28px] px-3">
                  Internet world is switching on 5G satellite data speeds
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[360px] h-[417px]">
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
                <p className="md:text-[18px] text-[16px] font-[500] leading-[24px] md:leading-[28px] px-3">
                  Search top 10 internet connections in your area with single
                  click
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
