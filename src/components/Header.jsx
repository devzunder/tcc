import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logobranca.svg";

const Head = () => {
  return (
    <header className="header">
      <img src={Logo} className="logo" alt="Logo Aquascript" />
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </nav>
    </header>
  );
};

export default Head;
