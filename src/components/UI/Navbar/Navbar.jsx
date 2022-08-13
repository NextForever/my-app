import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about">Осайте</Link>
        <Link to="/posts">Посты</Link>
        <Link to="/video">Видео</Link>
      </div>
    </div>
  );
};

export default Navbar;
