import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const Head = () => {
  return (
    <header>
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
      <NavLink className="btn" to="/new">
        Dimensionar
      </NavLink>
    </header>
  );
};

export default Head;
