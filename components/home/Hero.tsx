"use client";
// import Link from "next/link";
import { RootState } from "../../store/store";
import { setSelectedQuestion } from "../../store/slices/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";


export default function Hero() {
  const dispatch = useDispatch();
  const router = useRouter();


  const {  zipCode } = useSelector(
    (state: RootState) => state.location
  );
  const handleClick = () => {
    const questionWithZip = `The Best Internet Near Me ${zipCode}.`;
    dispatch(setSelectedQuestion(questionWithZip));
    router.push(`/${zipCode}`);
  };
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-bluish">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-wrap">
          <div className="w-full lg:w-full">
            <div className="home_content ">
              <h2 className="fz55 ">The Best Internet Providers Near Me</h2>
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
                    <Searchbtn text="Submit" onClick={handleClick}/>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0">
                <h1 className="text-[44px] text-white m-0">Moving ?</h1>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="py-[10px] px-[20px] rounded-lg outline-none border-none  bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};