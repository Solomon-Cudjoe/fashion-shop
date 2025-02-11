import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <header>
      <nav>
        <div className={styles.navBar}>
          <div className={styles.logo}>
            <NavLink to="/">
              <img
                src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1739279480/LOGO_eifisp.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div className={styles.navLinks}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Contact us
            </NavLink>
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
