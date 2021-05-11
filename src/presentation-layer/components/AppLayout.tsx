import React, { FunctionComponent, useContext } from "react";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import { useQuery } from "react-query";
import { categoryService } from "application/services/Category.services";
import { ReferenceCategoryContext } from "application/contexts/CategoryContext"
import { isEmpty } from "lodash";

type AppLayoutProps = {
  children?: React.ReactNode;
};

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  const { categoryId } = useContext(ReferenceCategoryContext);

  const { data: category } = useQuery(
    `category-${categoryId}`,
    () => categoryService.getCategoriesById(categoryId),
    {
      retry: 1,
      retryDelay: 3000,
      onError: ({ message }) => {
        console.error(message);
      },
      enabled: !isEmpty(categoryId),
    }
  );

  return (
    <>
      <Header />
      <main id="container">
        {category && <BreadCrumb items={category.items} />}
        {children}
      </main>
    </>
  );
};

export default AppLayout;
