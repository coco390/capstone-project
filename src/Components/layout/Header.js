import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./header.module.css"
import logo from "../layout/logolarge.PNG"
import pages from "../utilities/pages"

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);


const Header = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className={styles.container}>
        <Link className={styles.navlogo} to={pages.get('home').path}>
          <img src={logo} alt="Little Lemon logo" />
        </Link>
        <button
          className={styles.hamburger}
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <FontAwesomeIcon icon={isNavExpanded ? faXmark : faBars} size="2x" />
        </button>
        <ul
          className={isNavExpanded ? styles.navBarLinksExpanded : styles.navBarLinks}
          onClick={() => setIsNavExpanded(false)}
        >
          {navLinks.map((navLink, index) =>
            <li key={index}>
              <Link
                className={pathname === navLink.path ? styles.current : ''}
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;