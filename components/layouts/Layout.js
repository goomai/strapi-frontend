import { Footer15, Footer9 } from "components/blocks/footer";
import { Navbar } from "components/blocks/navbar";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <Navbar navClassName="navbar navbar-expand-lg navbar-light navbar-bg-light  shadow rounded  mb-5 bg-white" />
      {children}
      <Footer9 />
    </div>
  );
}

export default Layout;
