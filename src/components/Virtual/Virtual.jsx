import React from 'react';
import styles from './Virtual.module.css';
import Shade from '../../assets/shade.png';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';

import ReactCompareImage from 'react-compare-image';

const Virtual = () => {
  return (
        <div className={styles.Virtual}>
            <div className={styles.left}>
                <span>Virtual Try-On</span>
                <span>Never Buy the wrong Shade Again!</span>
                <span>Try Now!</span>
                <img src={Shade} alt="" />
            </div>

            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <ReactCompareImage leftImage={Before} rightImage={After}/>
                </div>
            </div>


        </div>
  )
}

export default Virtual