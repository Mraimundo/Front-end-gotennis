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
        <div className={styles.rechartsContent}>
          <div className={styles.areaChart} >

          </div>
          <div className={styles.linearChart} >
            <div className={styles.progressContainer}>
              <div className={styles.progress_Content}>
                <div className={styles.progress_won}>
                  <p>120</p>
                </div>
                <div className={styles.progress_lose}>
                  <p>80</p>
                </div>
              </div>
              <div>
                <p>200</p>
                <span>jogos</span>
              </div>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progress_Content}>
                <div className={styles.progress_won}>
                  <p>100</p>
                </div>
                <div className={styles.progress_lose}>
                  <p>40</p>
                </div>
              </div>
              <div>
                <p>140</p>
                <span>jogos</span>
              </div>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progress_Content}>
                <div className={styles.progress_won}>
                  <p>120</p>
                </div>
                <div className={styles.progress_lose}>
                  <p>80</p>
                </div>
              </div>
              <div>
                <p>200</p>
                <span>jogos</span>
              </div>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progress_Content}>
                <div className={styles.progress_won}>
                  <p>100</p>
                </div>
                <div className={styles.progress_lose}>
                  <p>40</p>
                </div>
              </div>
              <div>
                <p>140</p>
                <span>jogos</span>
              </div>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progress_Content}>
                <div className={styles.progress_won}>
                  <p>120</p>
                </div>
                <div className={styles.progress_lose}>
                  <p>80</p>
                </div>
              </div>
              <div>
                <p>300</p>
                <span>jogos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}