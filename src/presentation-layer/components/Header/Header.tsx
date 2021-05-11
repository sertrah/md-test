import React, { FunctionComponent, useState } from "react";
import { SearchBox } from "presentation-layer/components";
import mlLogo from "presentation-layer/assets/mlLogo.png";
import useQueryPath from "application/hooks/useQueryPath";
import { Link } from "react-router-dom";


const Header: FunctionComponent = () => {
  const [queryString] = useQueryPath();
  const [searchValue, setSearchValue] = useState(queryString?.search ?? "");
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={mlLogo} alt="mercado libre logo" />
      </Link>
      <SearchBox
        onChange={setSearchValue}
        value={searchValue}
        placeholder="Nunca dejes de sonar"
      />
    </nav>
  );
};

export default Header;
