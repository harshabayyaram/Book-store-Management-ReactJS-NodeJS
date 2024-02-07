import React from "react";

function NavbarMain() {
  return (
    <>
      <nav className="navbar navbar-dark bg-secondary" >
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="/">Book Store Management</a>
          </div>
          <div>
            <ul className="navbar-nav me-auto d-flex flex-row">
              <li className="nav-item d-block p-2">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item d-block p-2">
                <a className="nav-link" href="/about">Abouttt</a>
              </li>
              <li className="nav-item d-block p-2">
                <a className="nav-link" href="/contact">Contact US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarMain;