import React from "react";
import Button from "../buttonComp/Button";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="relative flex justify-center items-center h-[300px] ">
      <div className="container">
        <div className="w-full flex justify-center items-center ">
          <div className="w-[1381px] h-[376px] bg-[url('/assets/images/background.png')] bg-[var(--color-blue)] rounded-[22px] flex justify-center items-center relative mt-54">
            <div className="h-[201px] w-[1144px] flex justify-between ">
              <div className="w-[65%] flex flex-col justify-between ">
                <p className="text-[var(--color-white)]">Get Started Today</p>
                <h1 className="text-[var(--color-white)]">
                  Experience how Hyper G simplifies the fast and reliable
                  internet provider.
                </h1>
              </div>
              <div className="w-[35%]  flex flex-col justify-between items-end">
                <span>{""}</span>
                <Button
                  href={"/"}
                  text={"Learn more"}
                  class="bg-white w-[180px] py-[20px] px-[28px] rounded-[70px] "></Button>
              </div>
            </div>
            <Image src={"/assets/images/hyperg.png"} alt={"dd"} height={50} width={140} className="absolute top-14 right-10"/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
