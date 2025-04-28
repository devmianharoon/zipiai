import QuestionTiles from "../common/Question";
const questions = [
  {
    id: 1,
    question:
      "What are the available internet providers and their plans in the 90210 zip code?",
  },
  { id: 2, question: "hi" },
  {
    id: 2,
    question:
      "Are there any fiber optic internet options in the 33101 zip code?",
  },
  {
    id: 3,
    question:
      "Which internet providers offer the fastest speeds in the 94105 zip code?",
  },
  {
    id: 4,
    question:
      "My zip code is 10001, what are the available internet providers and their plans?",
  },
];

const HeroFilter = () => {
  return (
    <div className="home_content ">
      <h2 className="fz55 ">The Best Internet Near Me</h2>

      <QuestionTiles questions={questions} />
      <div className="absolute bottom-0 right-0">
        <h1 className="text-[44px] text-white m-0">Moving ?</h1>
        <input
          type="text"
          placeholder="Zip Code"
          className="py-[10px] px-[20px] rounded-lg outline-none border-none  bg-white"
        />
      </div>
    </div>
  );
};

export default HeroFilter;
