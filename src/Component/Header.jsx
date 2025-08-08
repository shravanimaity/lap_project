import React, { useState } from "react";
import styles from "./Header.module.css"

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
            <a href="#" className={styles.home}>Home</a>

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
                  <li onClick={() => setIsMembersOpen(!isMembersOpen)}><a href="#" className={styles.Memberdropdown}>Current Members</a></li>
                  <li onClick={() => setIsMembersOpen(!isMembersOpen)}><a href="#" className={ styles.Memberdropdown}>Alumni</a></li>
                  <li onClick={() => setIsMembersOpen(!isMembersOpen)}><a href="#" className={styles.Memberdropdown}>Interns</a></li>
                </ul>
              )}
            </div>

            <a href="#" className={styles.dropdown}>Research</a>
            <a href="#" className={styles.dropdown}>Event</a>
            <a href="#" className={styles.dropdown}>Project</a>
            <a href="#" className={styles.dropdown}>Contact Us</a>
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
          <a onClick={() => setIsMenuOpen(!isMenuOpen)} href="#" className={styles.Monclick}>Home</a>

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
                <li onClick={() => setIsMenuOpen(!isMenuOpen)} ><a href="#" className={styles.Memberdropdown}>Current Member</a></li>
                <li onClick={() => setIsMenuOpen(!isMenuOpen)} ><a href="#" className={styles.Memberdropdown}>Alumni</a></li>
                <li onClick={() => setIsMenuOpen(!isMenuOpen)} ><a href="#" className={styles.Memberdropdown}>Interns</a></li>
              </ul>
            )}
          </div>

          <a onClick={() => setIsMenuOpen(!isMenuOpen)} href="#" className={styles.Memberdropdown}>Research</a>
          <a onClick={() => setIsMenuOpen(!isMenuOpen)} href="#" className={styles.Memberdropdown}>Event</a>
          <a onClick={() => setIsMenuOpen(!isMenuOpen)} href="#" className={styles.Memberdropdown}>Project</a>
          <a onClick={() => setIsMenuOpen(!isMenuOpen)} href="#" className={styles.Memberdropdown}>Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Header;
