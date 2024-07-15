import React, { ReactNode } from "react";

interface TitlePageProps {
  children: ReactNode;
}

const TitlePage: React.FC<TitlePageProps> = ({ children }) => {
  return (
    <h1 className=" my-8 text-2xl font-extrabold text-center">{children}</h1>
  );
};

export default TitlePage;
