import React, { FC } from "react";
import { InputText, Button } from "presentation-layer/components";
import { ReactComponent as Logo } from "presentation-layer/assets/loupe.svg";
import useQueryPath from "application/hooks/useQueryPath";

const SearchBox: FC<any> = ({ onChange, value, placeholder }) => {
  const [setQueryString] = useQueryPath("items");

  const handleChange = ({ target }: { target: { value: string } }) =>
    onChange(target.value);

  const handleKeyPress = ({ key }: { key: string }) => {
    if (key === "Enter" && value) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    setQueryString({ search: value });
  };
  return (
    <div className="search-box">
      <InputText
        name="searchValue"
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        type="text"
      />
      <Button className="white-dark">
        <Logo />
      </Button>
    </div>
  );
};

export default SearchBox;
