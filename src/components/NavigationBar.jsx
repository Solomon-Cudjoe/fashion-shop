import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <header>
      <nav>
        <div className={styles.navBar}>
          <div className={styles.logo}>
            <NavLink>F</NavLink>
          </div>
          <div className={styles.navLinks}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
          </div>
          <div className={styles.search}>
            <input type="search" placeholder="Search name of product..." />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
