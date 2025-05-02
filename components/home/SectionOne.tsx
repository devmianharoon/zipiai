import Image from "next/image";
import React from "react";
import Searchbtn from "../buttonComp/Searchbtn";

const SectionOne = () => {
  return (
    <section className="w-full  bg-primary flex justify-center items-center py-14">
      <div className="container flex justify-center items-center h-[70vh] gap-14">
        <div className="img-sec w-[50%] relative h-full">
          <Image
            src="/assets/images/background/13.jpg"
            alt="cover image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>

        <div className="text-sec w-[50%]">
          <div className="pb-12">
            <h1 className="text-[30px] text-background font-[600]">
              Explore Guides and Resources{" "}
            </h1>
            <p className="text-background text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis laboriosam eveniet libero, quae vitae praesentium
              impedit quas. Repellendus culpa, eligendi illo reiciendis ea dolor
              dolores aspernatur in quos ratione cum.
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
