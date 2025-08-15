import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import React from "react";


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>

        <div className={styles["footer-section"]}>
          <h2 className={styles["footer-title"]}>BioComputaionalLab</h2>
          <p className={styles["footer-description"]}>
            “BioComputationalLab is dedicated to advancing computational biology through innovative research, collaboration, and development of cutting-edge bioinformatics tools. We strive to bridge biology and computation to tackle complex biomedical challenges.”</p> 
          <div className={styles["social-icons"]}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-subtitle"]}>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/event">Event</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-subtitle"]}>Resources</h3>
          <ul>
            <li><a href="/tools">Bioinformatics Tools</a></li>
            <li><a href="/datasets">Datasets</a></li>
            <li><a href="/workshops">Workshops</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      <div className={styles["footer-bottom"]}>
        <p>© {new Date().getFullYear()} BioComputationalLab. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
