import Image from 'next/image';

import { BiCaretDown } from "react-icons/bi";
import {  GiHamburgerMenu, GiTennisCourt } from "react-icons/gi";
import {  RiMedalFill } from "react-icons/ri";
import {  FaSignOutAlt, FaCog } from "react-icons/fa";
import styles from './styles.module.scss';


export function Activities () {
  return(
    <div className={styles.performanceContainer} >
      <div className={styles.performanceContent} >
        <div className={styles.buttonsContainer}>
          <button className={styles.buttonCorBlue}>
            Tudo
          </button>
          <button>
            Jogos
          </button>
          <button className={styles.postagens}>
            Postagens
          </button>
        </div>
      </div>
      <div className={styles.infoContainer}>
          <p>10 de novembro de 2020</p>
          <div className={styles.infoBox}>
            <div className={styles.infoContent}>
              <div>
                <p>Fez um jogo Rápido</p>
                <span>Campo Belo, São Paulo - SP</span>
              </div>
              <div className={styles.setsContainer}>
                <div>
                  <Image src="/nunes.svg" width={60} height= {60} alt="Google" />
                  <p>Amanda Nunes (você)</p>
                </div>
                <div className={styles.setsContent}>
                  <div>
                    <RiMedalFill/>
                    <span>2</span>
                    <span>7</span>
                    <span>6</span>
                  </div>
                  <button>
                    <p>sets</p>
                    <span>1º</span>
                    <span>2º</span>
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.footerContent}>
              <div className={styles.setsFooterContainer}>
                <div>
                  <Image src="/silva.svg" width={60} height= {60} alt="Google" />
                  <p>Eduardo Silva</p>
                </div>
                <div className={styles.setsContent}>
                  <div>
                    <span>0</span>
                    <span>6</span>
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}