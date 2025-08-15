import React, { useState } from "react";
import styles from "./Header.module.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMembersOpen, setIsMembersOpen] = useState(false);


  return (
    <header className={styles.maincontainer}>

      <div className={styles.HeadContainer}>
        <div className={styles.container}>
          <div className={styles.logo}>Bio-COMPUTATIONAL LAB</div>

          {/* Desktop nav */}
          <nav className={styles.navContainer}>
            <Link to="/Home" className={styles.home}>Home</Link>

            {/* Members dropdown */}
            <div className={styles.memberContainer}>
              <button
                onClick={() => setIsMembersOpen(prev => !prev)}
                className={styles.onclick}
              >
                <span className={styles.member}>Members</span>
                <svg
                  className={styles.membericon}
                  // {`w-4 h-4 transform transition-transform ${isMembersOpen ? "rotate-180" : "rotate-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMembersOpen && (
                <ul className={styles.ismemberopen} onMouseLeave={() => setIsMembersOpen(!isMembersOpen)} >
                  <li onClick={() => setIsMembersOpen(!isMembersOpen)}><Link to="/Member" className={styles.Memberdropdown}>Current Members</Link></li>
                  <li onClick={() => setIsMembersOpen(!isMembersOpen)}><Link to="/Member" className={ styles.Memberdropdown}>Alumni</Link></li>
                  <li onClick={() => setIsMembersOpen(!isMembersOpen)}><Link to="/Member" className={styles.Memberdropdown}>Interns</Link></li>
                </ul>
              )}
            </div>

            <Link to="/Research" className={styles.dropdown}>Research</Link>
            <Link to="/Event" className={styles.dropdown}>Event</Link>
            <Link to="/Project" className={styles.dropdown}>Project</Link>
            <Link to="/contact" className={styles.dropdown}>Contact Us</Link>
          </nav>

          {/* Mobile menu button */}
          <div className={styles.menu_container}>
            <button
              onClick={() => { setIsMenuOpen(prev => !prev); setIsMembersOpen(false); }}
              className={styles.button_container}>
              <svg className={styles.icons} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      {isMenuOpen && (
        <div className={styles.mobileNav}>
          <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/Home" className={styles.Monclick}>Home</Link>

          {/* Mobile Members dropdown */}
          <div>
            <button
              onClick={() => setIsMembersOpen(prev => !prev)}
              className={styles.MbuttonContainer}>
              <span className={styles.Memberdropdown}>Members</span>
              <svg
                className={`${styles.Mismemberopen} ${isMembersOpen ? "rotate-180" : "rotate-0"
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMembersOpen && (
              <ul className={styles.Mdropdown}>
                <li onClick={() => setIsMenuOpen(!isMenuOpen)} ><Link to="/Member" className={styles.Memberdropdown}>Current Member</Link></li>
                <li onClick={() => setIsMenuOpen(!isMenuOpen)} ><Link to="/Member" className={styles.Memberdropdown}>Alumni</Link></li>
                <li onClick={() => setIsMenuOpen(!isMenuOpen)} ><Link to="/Member" className={styles.Memberdropdown}>Interns</Link></li>
              </ul>
            )}
          </div>

          <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/Research" className={styles.Memberdropdown}>Research</Link>
          <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/Event" className={styles.Memberdropdown}>Event</Link>
          <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="Project" className={styles.Memberdropdown}>Project</Link>
          <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/contact" className={styles.Memberdropdown}>Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
