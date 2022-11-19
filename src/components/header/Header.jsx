import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";


const Header = () => {
  const [showMenu, setShowMenu] = useState(true)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
          <span>nickmart</span>
        </div>
        <div className={styles.right}>

        <div className={styles.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>

            <ul className={styles.menu} style={{display: showMenu ? 'inherit' : 'none'}}>
              <li>Collections</li>
              <li>Brands</li>
              <li>new</li>
              <li>Sales</li>
              <li>ENG</li>
            </ul>

          <input type="text" className={styles.search} placeholder="Search" />
          <CgShoppingBag className={styles.cart} />
        </div>
      </div>
    </>
  );
};

export default Header;
