import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout = ({
  homePage,
  children,
}: {
  homePage?: Boolean;
  children: ReactNode;
}) => {
  return (
    <>
      <Header homePage={homePage} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
