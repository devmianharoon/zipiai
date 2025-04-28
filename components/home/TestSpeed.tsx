import React from "react";
import Searchbtn from "../buttonComp/Searchbtn";

const TestSpeed = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-white color-black">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl py-4">
            Time is Precious! Dont let your internet slow you down . <br /> Test
            Your Speed!
          </h1>
          <div className="flex justify-center items-center py-8 gap-10">
            <h1>Check my Speed </h1>
            <Searchbtn text="Submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSpeed;
