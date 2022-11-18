import React from "react";
import { BarLoader } from "react-spinners";
import "../Styles/LoaderComp.css";

const Handler = () => {
  return (
    <div className="loader_container">
      <span>Wait a Sec...</span>
      <BarLoader color="#ebeb5e" speedMultiplier={1} />
    </div>
  );
};

export default Handler;
