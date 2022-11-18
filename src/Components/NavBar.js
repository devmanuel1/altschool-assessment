import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavigateContext } from "../App";
import "../Styles/NavBar.css";

const Handler = () => {
  const { activeRoute } = useContext(NavigateContext);

  return (
    <div className="nav_container">
      {/* logo side  */}
      <div className="nav_logo_div">
        <h1>Home</h1>
      </div>
      {/* link side  */}
      <div className="nav_link_div">
        <ul>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li className={`nav_link  ${activeRoute === "home" && "nav_active"}`}>Home</li>
          </Link>

          <Link to={"/repos"} style={{ textDecoration: "none" }}>
            <li className={`nav_link ${activeRoute === "repos" && "nav_active"}`}>Repos</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Handler;
