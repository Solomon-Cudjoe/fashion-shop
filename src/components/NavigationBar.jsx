import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.navBar}>
      <NavLink className={styles.logo}>F</NavLink>
      <div className={styles.navLinks}>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About us</NavLink>
        {/* <NavLink>Features</NavLink> */}
        <NavLink to="/contact">Contact us</NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
