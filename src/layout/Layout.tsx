

import { FC } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

type TProps = {
  children: any
}

const Layout: FC<TProps> = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
