import { createContext, useState } from "react";

const ReferenceCategoryContext = createContext<any>(null);

const ReferenceCategoryContextProvider = ({ children }: any) => {
  const [categoryId, setCategoryId] = useState(null);
  return (
    <ReferenceCategoryContext.Provider value={{ categoryId, setCategoryId }}>
      {children}
    </ReferenceCategoryContext.Provider>
  );
};

export { ReferenceCategoryContext, ReferenceCategoryContextProvider };
