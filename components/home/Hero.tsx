"use client";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
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
    <section className="w-full h-[720px] box-border relative bg-cover bg-center bg-no-repeat bg-bluish py-16">
      <div className="container mx-auto px-4  ">
        <div className=" flex flex-wrap">
          <div className="w-full lg:w-full flex justify-center items-center ">
            <div className="home_content w-[650px] text-center">
              <h2 className="fz55 text-[48px] text-primary font-bold ">
                We find the best internet provider and plains near you!
              </h2>
              <p>Search providers , compare plains and order service in just a few easy clicks</p>
              <h3>Search your current location</h3>
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
                      text="Search now"
                      onClick={handleClick}
                      wclass="w-[195px]"
                      bgColor="bg-redish"
                    />
                  </div>
                </div>
              </div>
              {/* <Moving/> */}
              {/* <div className="absolute w-full top-24  ">
                <Moving />
              </div> */}
            </div>
          </div>
        </div>
        <div className="absolute w-full top-36 left-4">
          <Moving />
        </div>
      </div>
    </section>
  );
}
