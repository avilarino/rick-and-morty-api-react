import React from "react";
import "./navbar.css"


const Navbar = ({ brand }) => {
  return (
    <nav className="mb-10 navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;