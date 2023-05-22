import { Container } from "react-bootstrap";
import React from "react";
import Navigation from "./navigation.layout";

const MainLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
    </React.Fragment>
  );
};

export default MainLayouts;
