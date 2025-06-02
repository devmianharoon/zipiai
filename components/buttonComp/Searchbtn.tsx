import React from "react";
interface btn {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: React.ReactNode;
  wclass?: string;
  hpclass?:string;
  bgColor?: string;
  icon?: string;
}
const Searchbtn = (props: btn) => {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      style={{ borderRadius: "90px" }}
      className={` text-white  font-[500] text-[16px]   cursor-pointer ${props.wclass} ${props.bgColor} ${props.hpclass} justify-center items-center inline-flex gap-[10px]`}>
      {props.text}
    </button>
  );
};

export default Searchbtn;
