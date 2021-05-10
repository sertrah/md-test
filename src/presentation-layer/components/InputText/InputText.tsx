import React, { FunctionComponent, InputHTMLAttributes } from "react"; // importing FunctionComponent
import cn from "classnames";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: `${string}` | `${string}.${string}` | `${string}.${number}`;
}
const InputText: FunctionComponent<InputTextProps> = ({
  name,
  ...passedProps
}) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className={cn("input-text")}
        id={name}
        aria-label={name}
        {...passedProps}
      />
    </div>
  );
};

export default InputText;
