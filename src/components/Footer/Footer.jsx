import {
    InboxIcon, LinkIcon, LocationMarkerIcon,
    LoginIcon, PhoneIcon, UsersIcon
} from "@heroicons/react/outline";
import React from "react";
import Logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.cFooterWrapper}>
      <hr />
      <div className={styles.cFooter}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
          <span>nickmart</span>
        </div>

        <div className={styles.block}>
            <div className={styles.detail}>
                <span>Contact US</span>
                <span className={styles.pngLine}>
                    <LocationMarkerIcon className={styles.icon} />
                    <span>111 north avenue Orlando, FL 32801</span>
                </span>

                 <span className={styles.pngLine}>
                    {" "}
                    <PhoneIcon className={styles.icon} />
                    <a href="tel:352-306-4415">352-306-4415</a>
                </span>

                <span className={styles.pngLine}>
                    <InboxIcon className={styles.icon} />
                    <a href="mailto:support@nickmart.com">support@nickmart.com</a>
                </span>
            </div>
        </div>

        <div className={styles.block}>
            <div className={styles.detail}>
                <span>Account</span>
                <span className={styles.pngLine}>
                    <LoginIcon className={styles.icon} />
                    Sign In
                </span>
            </div>
        </div>

        <div className={styles.block}>
            <div className={styles.detail}>
                <span>Company</span>
                <span className={styles.pngLine}>
                    <UsersIcon className={styles.icon} />
                    <a href="/about">
                        <p>About us</p>
                    </a>
                </span>
            </div>
        </div>

        <div className={styles.block}>
            <div className={styles.detail}>
                <span>Resources</span>
                <span className={styles.pngLine}>
                    <LinkIcon className={styles.icon} />
                        <p>Safety Privacy & Terms</p>
                </span>
            </div>
        </div>

        <div className={styles.copyRight}>
            <span>Copyright ©2022 by Nickmart, Inc.</span>
            <span>All rights reserved.</span>
        </div>

      </div>
    </div>
  );
};

export default Footer;
