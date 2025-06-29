import Link from "next/link";
import React from "react";

interface BtnProps {
  href: string;
  text: string;
  className?: string;
  icon?: React.ReactNode;
}

const Button = ({ href, text, className, icon }: BtnProps) => {
  return (
    <Link href={href} className={`inline-flex items-center gap-4 ${className}`}>
      <>
        {icon && <span>{icon}</span>}
        {text && <span>{text}</span>}
      </>
    </Link>
  );
};

export default Button;
