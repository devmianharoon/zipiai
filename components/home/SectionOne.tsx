import Image from "next/image";
import React from "react";
import Searchbtn from "../buttonComp/Searchbtn";

const SectionOne = () => {
  return (
    <section className="w-full  bg-primary flex justify-center items-center py-14">
      <div className="container flex justify-center items-center h-[70vh] gap-14">
        <div className="img-sec w-[50%] relative h-full">
          <Image
            src="/assets/images/showcaseone.jpg"
            alt="cover image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>

        <div className="text-sec w-[50%]">
          <div className="pb-12">
            <h1 className="text-[30px] text-background font-[600]">
              Stream. Chill. Repeat.{" "}
            </h1>
            <p className="text-background text-[18px]">
              Enjoy cinematic experiences from the comfort of your couch. Our
              reliable and buffer-free streaming services bring your favorite
              movies, shows, and live sports to life—perfect for family nights
              and weekend marathons.
            </p>
          </div>
          <div className="text-right">
            <Searchbtn text={"Read More"} wclass="w-46" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
