import Link from "next/link";
import React from "react";

interface btn {
  href: string;
  text: string;
}

const Button = (props: btn) => {
  return (
    <Link href={props.href}>
      <span className="dn-lg"> {props.text}</span>
    </Link>
  );
};

export default Button;
