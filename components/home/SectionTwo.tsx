import React from "react";
import Searchbtn from "../buttonComp/Searchbtn";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="w-full  bg-primary flex justify-center items-center py-14">
      <div className="container flex justify-center items-center h-[70vh] gap-14">
        <div className="text-sec w-[50%]">
          <div className="pb-12">
            <h1 className="text-[38px] text-background font-[900]">
              Independent Research{" "}
            </h1>
            <p className="text-background text-[18px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              repellat earum accusamus praesentium inventore et aspernatur sit
              recusandae saepe neque assumenda similique non atque architecto
              veniam ullam totam sequi eius, ex corporis repellendus odio?
              Consequatur magni repellat animi molestiae delectus voluptas
              suscipit autem ullam beatae?
            </p>
          </div>
          <div className="text-right">
            <Searchbtn text={"Read More"} wclass="w-46" />
          </div>
        </div>
        <div className="img-sec w-[50%] relative h-full">
          <Image
            src="/assets/images/background/13.jpg"
            alt="cover image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
