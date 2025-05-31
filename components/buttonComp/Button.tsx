import Link from "next/link";
import React from "react";

interface btn {
  href: string;
  text: string;
  class?: string;
}

const Button = (props: btn) => {
  return (
    <Link href={props.href}>
      <span className={`${props.class}`}> {props.text}</span>
    </Link>
  );
};

export default Button;
