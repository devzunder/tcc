import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../logo.svg";

const Head = () => {
  return (
    <header className="header">
      <img src={Logo} style={{ width: 100 }} alt="Logo Aquascript" />
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </nav>
    </header>
  );
};

export default Head;
