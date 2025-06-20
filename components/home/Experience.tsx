import React from "react";
import Button from "../buttonComp/Button";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
const Experience = () => {
  return (
    <section className="relative flex justify-center items-center h-[200px] lg:h-[300px] box-border ">
      <div className="container mb-[-180px] md:mb-[0]">
        <div className="w-full flex justify-center items-center">
          <div className="w-[372px] h-[460px] lg:w-[1381px] lg:h-[376px] bg-[url('/assets/images/background.png')] bg-cover bg-[var(--color-blue)] rounded-[22px] flex flex-col lg:flex-row justify-center items-center relative mt-0 lg:mt-54 gap-5  text-center lg:text-left ">
            {/* Logo Image First */}
            <div className="flex justify-center items-center lg:block w-full lg:w-auto">
              <Image
                src={"/assets/images/hyperg.png"}
                alt={"Hyper G Logo"}
                height={50}
                width={140}
                className="pt-[16px] lg:mt-0 lg:absolute md:top-[48px] lg:right-[48px] "
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[65%] md:px-14">
              <p className="text-[var(--color-white)]  lg:text-[28px] font-[500]  lg:text-base">
                Get Started Today
              </p>
              <h3 className="text-[var(--color-white)] text-[30px] leading-[38px] md:text-[42px] font-[600] lg:leading-[52px] md:leading-[52px] px-4 md:px-0 py-4 md:pt-10 md:w-[642px]">
                Experience how HyperG makes finding fast, reliable high-speed
                internet internet easy.
              </h3>
            </div>

            {/* Button Section */}
            <div className="w-full lg:w-[35%] flex justify-center md:justify-end md:pt-[132px] md:px-20">
              <Button
                icon={<FaPhoneAlt />}
                href={"/"}
                text={"Call"}
                className="bg-white  md:py-[21px] py-[12px] px-[28px] md:px-[48px] rounded-[80px] md:text-[28px] md:font-[500] md:leading-[14.4px] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
