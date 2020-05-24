import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/App.css";

export default function NavBar() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/about" activeClassName="current">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/discovermovies" activeClassName="current">
              Discover Movies
            </NavLink>
            <li>
              <NavLink exact to="/" exact activeClassName="current">
                Homepage
              </NavLink>
            </li>
          </li>
        </ul>
      </div>
    </nav>
  );
}
