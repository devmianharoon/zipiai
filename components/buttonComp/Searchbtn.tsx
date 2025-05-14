import React from "react";
interface btn {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  wclass?: string;
}
const Searchbtn = (props: btn) => {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      style={{ borderRadius: "40px" }}
      className={`bg-redish text-white py-2.5 px-2.5  font-[700] text-[16px] border-redish border-2 rounded-md cursor-pointer hover:border-redish hover:bg-white hover:text-redish  transition-all duration-300 ease-in-out ${props.wclass}`}>
      {props.text}
    </button>
  );
};

export default Searchbtn;
