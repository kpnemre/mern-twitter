import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";
import cn from "classnames";

const LinkButton = ({ href, selected, children, ...props }) => {
  return (
    <Link href={href}>
      <a {...props}>{chilren}</a>
    </Link>
  );

};

const BaseButton = ()=>{

};


const Button = ({ xl, full, children, ...props }) => {
  
  return (
    <div
      className={cn(
        styles.button,
        full && styles.fullButton,
        xl && styles.xlButton
      )}
    >
      {children}
    </div>
  );
};

export default Button;
