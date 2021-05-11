import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { CategoryItems } from "application/models/Category.model";

const Breadcrumb: FunctionComponent<{
  items: CategoryItems[];
}> = ({ items }) => {
  return (
    <ol className="breadcrumb" aria-label="breadcrumb">
      {items.map(({ id, name }) => (
        <li className="breadcrumb-item" key={id}>
          {name}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumb;
