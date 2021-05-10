import React, { FunctionComponent } from "react";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";

type AppLayoutProps = {
  children?: React.ReactNode;
};

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => (
  <>
    <Header />
    <main id="container">
      <BreadCrumb/>
      {children}
    </main>
  </>
);

export default AppLayout;