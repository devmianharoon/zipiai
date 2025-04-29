import React from "react";

const TestSpeed = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-white color-black">
      <div className="container mx-auto px-4 ">
        <div className="text-center">
          <h1 className="text-[18px] py-4">
            Time is Precious! Dont let your internet slow you down . Test Your
            Speed!
          </h1>
          <div className="flex justify-center items-center py-8 gap-10">
            {/* <h1> </h1> */}
            {/* <Searchbtn text="Check my Speed" /> */}
            <button
              // onClick={}
              type="submit"
              style={{ borderRadius: "40px" }}
              className=" bg-redish text-white py-2.5 px-2.5 w-56 font-[900] text-[24px] border-redish border-2 rounded-md cursor-pointer hover:border-redish hover:bg-white hover:text-redish  transition-all duration-300 ease-in-out"
            >Check my Speed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSpeed;
