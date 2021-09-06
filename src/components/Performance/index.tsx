import Image from 'next/image';

import { BiCaretDown } from "react-icons/bi";
import {  GiHamburgerMenu, GiTennisCourt } from "react-icons/gi";
import {  RiMedalFill } from "react-icons/ri";
import {  FaSignOutAlt, FaCog } from "react-icons/fa";
import styles from './styles.module.scss';


export function Performance () {
  return(
    <div className={styles.performanceContainer} >
      <div className={styles.performanceContent} >
        <div className={styles.buttonsContainer}>
          <button className={styles.buttonCorBlue}>
            Geral
          </button>
          <button>
            <p>em 2020</p>
            <BiCaretDown/>
          </button>
        </div>
        <div>
          {/* {/* <Performance/> */}
          {/* <Graphics/>  */}
        </div>
      </div>
    </div>
  )
}