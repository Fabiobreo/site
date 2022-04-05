import React, { Fragment } from "react";

import Navbar from "./navbar/Navbar";

const PageLayout: React.FC = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default PageLayout;
