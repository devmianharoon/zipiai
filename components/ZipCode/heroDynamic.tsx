"use client";
import { RootState } from "../../store/store";
import { setSelectedQuestion } from "../../store/slices/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";


export default function HeroDynamic() {
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
            <div className=" ">
              <h2 className="fz55 "> Show Me The Plans & Prices For Each Provider </h2>
              <div>
                <div className="rightSection">
                  <div className="inputSection">
                    
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