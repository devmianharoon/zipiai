"use client";

import { setSelectedQuestion } from "../../store/slices/questionSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";

interface jkl {
  id: number;
  question: string;
}
// Define a type for the question
interface QuestionTilesProps {
  questions: jkl[]; // or adjust if it's an array of objects
}

const QuestionTiles = ({ questions }: QuestionTilesProps) => {
  console.log(questions);

  const dispatch = useDispatch();
  const router = useRouter();
  const [inputQuestion, setInputQuestion] = useState<string>("");
  // const a = setInputQuestion("hello");
  // console.log(a);

  const handleClick = (question: string) => {
    dispatch(setSelectedQuestion(question));
    router.push("/chat");
  };

  const handleInputSubmit = () => {
    if (inputQuestion.trim() !== "") {
      handleClick(inputQuestion);
    }
  };

  const abs = handleInputSubmit();
  console.log(abs);

  // remvoed keboard event from import alos

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
          <Searchbtn onClick={() => handleClick(inputQuestion)} text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default QuestionTiles;
