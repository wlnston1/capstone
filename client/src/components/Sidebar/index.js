import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <h4>
        <Link to="/">Dashboard </Link>
      </h4>
      <h4>
        <Link to="/contact">Contact </Link>
      </h4>
      <h4>
        <Link to="/service"> Service </Link>
      </h4>
      
      {/* 
      <h4>
        <Link to="/">Dashboard </Link>
      </h4>
      <h4>
        <Link to="/">Dashboard </Link>
      </h4> */}
    </nav>
  );
}

export default Sidebar;
