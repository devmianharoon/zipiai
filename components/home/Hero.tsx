"use client";
import {  RootState } from "../../store/store";
import {  useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";
import Moving from "./Moving";


export default function Hero() {
  const router = useRouter();
  const { zipCode } = useSelector((state: RootState) => state.location);
  const handleClick = () => {
    router.push(`/${zipCode}`);
  };
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-bluish py-16">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-wrap">
          <div className="w-full lg:w-full">
            <div className="home_content h-[50vh] flex justify-center items-center flex-nowrap gap-5">
              <h2 className="fz55 text-[44px] text-primary font-bold ">
                The Best Internet Providers Near Me
              </h2>
              <div>
                <div className="rightSection">
                  <div className="inputSection">
                    {/* <Link
                      href={`/${zipCode}`}
                      style={{ borderRadius: "40px" }}
                      
                      className="bg-redish text-white py-2.5 px-2.5 w-46 font-[900] text-[18px] border-redish border-2 rounded-md cursor-pointer hover:border-redish hover:bg-white hover:text-redish transition-all duration-300 ease-in-out flex items-center justify-center"
                    >
                      {"Submit"}
                    </Link> */}
                    {/* onClick={handleClick} this was in button causin    error*/}

                    <Searchbtn
                      text="Submit"
                      onClick={handleClick}
                      wclass="w-46"
                    />
                  </div>
                </div>
              </div>
              <Moving/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
