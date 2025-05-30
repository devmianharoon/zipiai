import React from "react";
interface btn {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  wclass?: string;
  bgColor?: string;
}
const Searchbtn = (props: btn) => {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      style={{ borderRadius: "90px" }}
      className={` text-white py-[13px] px-[16px] font-[500] text-[16px] border-redish border-2  cursor-pointer hover:border-redish hover:bg-white hover:text-redish  transition-all duration-300 ease-in-out ${props.wclass} ${props.bgColor}`}>
      {props.text}
    </button>
  );
};

export default Searchbtn;
