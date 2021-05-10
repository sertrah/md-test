import React, { FunctionComponent } from "react";
import cn from "classnames";

const Button: FunctionComponent<{
  href?: string;
  id?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}> = ({ href, children, className, ...props }) => {
  if (href) {
    return (
      <a href={href} className="btn btn--text" {...props}>
        {children}
      </a>
    );
  }
  return (
    <button  className={cn("btn btn--contained", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
