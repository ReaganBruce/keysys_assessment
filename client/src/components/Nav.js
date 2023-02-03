import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div id="nav" className="justify-content-start"></div>
        <div className="container d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="">
              <Link
                to="/"
                className="btn btn-secondary btn-lg btn-block mx-3 mr-4 text-white"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="/Invoices"
                className="btn btn-secondary btn-lg btn-block mx-3 mr-4 text-white"
              >
                Invoices
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
