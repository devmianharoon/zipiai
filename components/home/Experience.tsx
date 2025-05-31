import React from "react";
import Button from "../buttonComp/Button";

const Experience = () => {
  return (
    <section className="relative flex justify-center items-center">
      <div className="container">
        <div className="w-full flex justify-center items-center ">
          <div className="w-[1381px] h-[376px] bg-[url('/assets/images/background.png')] bg-[var(--color-blue)] rounded-[22px] flex justify-center items-center">
            <div className="h-[201px] w-[1144px] flex justify-between ">
              <div className="w-[65%]">
                <p>Get Started Today</p>
                <h1>
                  Experience how Hyper G simplifies the fast and reliable
                  internet provider.
                </h1>
              </div>
              <div className="w-[35%] text-end ">
                <Button
                  href={"/"}
                  text={"Learn more"}
                  class="bg-white w-[180px] py-[20px] px-[28px] rounded-[70px] "></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
