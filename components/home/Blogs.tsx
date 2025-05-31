import Image from "next/image";
import React from "react";

const Blogs = () => {
  return (
    <section className="w-full flex justify-center items-center py-26">
      <div className="container">
        <div className="text-center">
          <p className="text-[var(--color-blue)] py-2.5">Blogs & Articles</p>
          <h1 className="text-[42px] py-2">Building trust by our services</h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[1120px] py-10 flex justify-center items-center gap-5">
            <div className="w-[360px] h-[421px]">
              <div className="relative">
                <Image
                  src={"/assets/images/b1.png"}
                  alt={"dd"}
                  height={351}
                  width={360}
                  className="rounded-[12px]"
                />
                <span className="tag bg-[var(--color-red)] rounded-[16px] py-1 px-2.5 text-white absolute top-4 right-4">
                  Support
                </span>
              </div>
              <div className="text-center py-4">
                <p className="text-[18px] px-3">
                  Hyper G available and reply instantly to your queries
                </p>
              </div>
            </div>

            <div className="w-[360px] h-[421px]">
              <div className="relative">
                <Image
                  src={"/assets/images/b2.png"}
                  alt={"dd"}
                  height={351}
                  width={360}
                  className="rounded-[12px]"
                />
                <span className="tag bg-[var(--color-red)] rounded-[16px] py-1 px-2.5 text-white absolute top-4 right-4">
                  Blog
                </span>
              </div>
              <div className="text-center py-4">
                <p className="text-[18px] px-3">
                  Internet world is switching on 5G satellite data speeds
                </p>
              </div>
            </div>

            <div className="w-[360px] h-[421px]">
              <div className="relative">
                <Image
                  src={"/assets/images/b3.png"}
                  alt={"dd"}
                  height={351}
                  width={360}
                  className="rounded-[12px]"
                />
                <span className="tag bg-[var(--color-red)] rounded-[16px] py-1 px-2.5 text-white absolute top-4 right-4">
                  Article
                </span>
              </div>
              <div className="text-center py-4">
                <p className="text-[18px] px-3">
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
