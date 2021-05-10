import React, { FunctionComponent } from "react"; // importing FunctionComponent

const Breadcrumb: FunctionComponent = () => {
  return (
    <ol className="breadcrumb" aria-label="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Library
      </li>
    </ol>
  );
};

export default Breadcrumb;
