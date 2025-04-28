"use client";

// import { setSelectedQuestion } from "../../store/slices/questionSlice";
// import { useDispatch } from "react-redux";
// import { useState, KeyboardEvent } from "react";
// import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";

// Define a type for the question
// interface QuestionTilesProps {
//   questions: string[]; // or adjust if it's an array of objects
// }

const QuestionTiles = () => {
  // console.log(questions);

  // const dispatch = useDispatch();  
  // const router = useRouter();
  // const [inputQuestion, setInputQuestion] = useState<string>("");
  // const a = setInputQuestion("hello");
  // console.log(a);

  // const handleClick = (question: string) => {
  //   dispatch(setSelectedQuestion(question));
  //   router.push("/chat");
  // };

  // const handleInputSubmit = () => {
  //   if (inputQuestion.trim() !== "") {
  //     handleClick(inputQuestion);
  //   }
  // };

  // const abs = handleInputSubmit();
  // console.log(abs);

  // const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     handleInputSubmit();
  //   }
  // };
  // const a = handleKeyDown(1);
  // console.log(a);

  return (
    <div>
      <div className="rightSection">
        <div className="inputSection">
          {/* onClick={() => handleClick(inputQuestion)} */}
          <Searchbtn text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default QuestionTiles;
