import React from "react";

const Subscribe = () => {
  return (
    <section className="w-full bg-redish text-primary">
      <div className="container mx-auto flex justify-between items-center py-10 px-14">
        <div className="text-sec w-[50%] ">
          <h2 className="text-[30px] font-[700]">
            Stay Connected and Informed
          </h2>
          <p className="text-[14px]">
            Subscribe to our newsletter for the latest broadband deals, tips,
            and exclusive updates delivered straight to your inbox.
          </p>
        </div>
        <div className="input-sec w-[50%] text-right">
          <div className="flex gap-4 justify-end">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="py-[14px] px-[20px] rounded-lg outline-none border-none  bg-primary placeholder:text-navtext text-navtext"
            />
            <button className="rounded-[8px] bg-[#ff787c] text-white shadow-[0_1px_4px_0_rgba(255,90,95,0.3)] h-[60px] leading-[50px] w-[140px] transition-all duration-300 ease-in-out hover:bg-white hover:text-[#ff787c] border border-[#ff787c]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
