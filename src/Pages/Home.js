import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavigateContext } from "../App";
import "../Styles/HomePage.css";

const Handler = () => {
  const { setActiveRoute } = useContext(NavigateContext);

  useEffect(() => {
    setActiveRoute("home");
  });

  return (
    <div className="home_container">
      <h1>Home Page</h1>
    </div>
  );
};

export default Handler;
