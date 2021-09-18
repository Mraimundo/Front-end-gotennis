import { useState } from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';

import { BiHomeAlt, BiTennisBall, BiBarChartAlt2, BiMenu, BiMenuAltLeft } from "react-icons/bi";
import {  GiHamburgerMenu, GiTennisCourt } from "react-icons/gi";
import {  RiMedalFill } from "react-icons/ri";
import {  FaSignOutAlt, FaCog } from "react-icons/fa";

import styles from './styles.module.scss';


export function SideBar () {
    const router= useRouter()
    const [sidbarExpanded, setSidbarExpanded] = useState(false);

  return(
    <div className={styles.sidebarMenu} >
      <div onClick={() => setSidbarExpanded(!sidbarExpanded)} className={styles.toogleMenu}>
        {
          sidbarExpanded ?  <BiMenu/> : <BiMenuAltLeft/>
        } 
      </div>
      <div className={`${styles.mainMenu} ${sidbarExpanded ? styles.activemain : null}`} >
        <ul>
          <li onClick={()=> router.push("/home")}>
            <a className={styles.menuItem}>
              <div>
                  <BiHomeAlt />
              </div>
              <span> Novidades</span>
            </a>
          </li>
          <li onClick={()=> router.push("/tournaments")}>
            <a className={styles.menuItem}>
              <div>
                <RiMedalFill/>
              </div>
              <span>Torneios</span>
            </a>
          </li>
          <li onClick={()=> router.push("/fast_game")}>
            <a className={styles.menuItem}>
              <div>
                <BiTennisBall />
              </div>
              <span>Jogo rápido</span>              
            </a>
          </li>
          <li onClick={()=> router.push("/rankigs")}>
            <a className={styles.menuItem}>
              <div>
                <BiBarChartAlt2 />
              </div>
              <span>Rankings</span>              
            </a>
          </li>
          <li onClick={()=> router.push("/where_to_play")}>
            <a className={styles.menuItem}>
              <div>
                <GiTennisCourt/>
              </div>
              <span> Onde jogar</span>                           
            </a>
          </li>
        </ul>
      </div>
      <div className={`${styles.footerMenu} ${sidbarExpanded ? styles.activefooter : null}`}>
        <ul>
          <li>
            <a className={styles.menuItem}>
              <div>
                <FaCog/>
              </div>
              <span>Configurações</span>    
            </a>
          </li>
          <li>
            <a className={styles.menuItem}>
              <div>
                <FaSignOutAlt/>
              </div>
              <span>Sair</span>  
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}