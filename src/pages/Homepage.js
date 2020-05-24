import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1> Home Page</h1>
      <Link to="/"> Go to Homepage</Link>
    </div>
  );
}
