import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import Logo from "../logo.svg";

const Head = () => {
  return (
    <header className="row">
      <div className="logo">
        <img src={Logo} style={{ width: 100 }} />
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <NavLink to="/">Inicio</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/about">Sobre</NavLink>
        </Menu.Item>
      </Menu>
    </header>
  );
};

export default Head;
