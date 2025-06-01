import React from "react";
import Button from "../buttonComp/Button";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="relative flex justify-center items-center h-[200px] lg:h-[300px] box-border ">
      <div className="container mb-[-180px] md:mb-[0]">
        <div className="w-full flex justify-center items-center">
          <div className="w-[372px] h-[460px] lg:w-[1381px] lg:h-[376px] bg-[url('/assets/images/background.png')] bg-cover bg-[var(--color-blue)] rounded-[22px] flex flex-col lg:flex-row justify-center items-center relative mt-0 lg:mt-54 gap-5 px-4 text-center lg:text-left">
            {/* Logo Image First */}
            <div className="flex justify-center lg:block w-full lg:w-auto">
              <Image
                src={"/assets/images/hyperg.png"}
                alt={"Hyper G Logo"}
                height={50}
                width={140}
                className="mt-4 lg:mt-0 lg:absolute lg:top-14 lg:right-10"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[65%] md:px-14">
              <p className="text-[var(--color-white)] text-sm lg:text-base">
                Get Started Today
              </p>
              <h1 className="text-[var(--color-white)] text-[30px] leading-[38px] md:text-[42px]  lg:leading-[42px] px-4 md:px-0 py-2 md:pt-10">
                Experience how Hyper G simplifies the fast and reliable internet
                provider.
              </h1>
            </div>

            {/* Button Section */}
            <div className="w-full lg:w-[35%] flex justify-center md:justify-end md:pt-34 md:px-20">
              <Button
                href={"/"}
                text={"Learn more"}
                class="bg-white w-[180px] md:py-[20px] py-[12px] px-[20px] md:px-[28px] rounded-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
