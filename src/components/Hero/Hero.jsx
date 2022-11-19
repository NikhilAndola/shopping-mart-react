import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={styles.container}>
      <div className={styles.h_sides}>
        <span className={styles.text1}>Skin protection cream</span>

        <div className={styles.text2}>
          <span>Trendy collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      {/* middle side hero image */}
      <div className={styles.wrapper}>
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={styles.blueCircle}
        ></motion.div>

        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={HeroImg}
          alt=""
          width={600}
        />

        <motion.div
         initial={{ right: "4%" }}
         whileInView={{ right: "2%" }}
         transition={transition}
         className={styles.cart2}>
          <RiShoppingBagFill />

          <div className={styles.signup}>
            <span>Best signup offers</span>

            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>

      </div>

      {/* right side */}
      <div className={styles.h_sides}>
        <div className={styles.traffic}>
          <span>1.5m</span>
          <span>Monthly traffic</span>
        </div>

        <div className={styles.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
