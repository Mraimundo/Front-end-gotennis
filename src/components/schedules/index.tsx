import Image from 'next/image';
import React, { PureComponent } from 'react';
import { AreaChart, Area , Legend, ResponsiveContainer } from 'recharts';

import { FaUserAlt } from "react-icons/fa";
import {  RiMedalFill } from "react-icons/ri";
import styles from './styles.module.scss';


export function Schedules() {
  
  return(
    <div className={styles.performanceContainer} >
      <div className={styles.performanceContent} >
        
      </div>
      <div className={styles.infoContainer}>
          <p>10 de novembro de 2020</p>
          <div className={styles.infoBox}>
             <div className={styles.infoUser}>
                <div>
                  <p>Participará de um torneio</p>
                  <span>Nome do torneio</span>
                </div>
                <button>Inscrições abertas</button>
             </div>
          </div>
      </div>
      <div className={styles.infoContainer}>
          <p>08 de novembro de 2020</p>
          <div className={styles.infoBox}>
             <div className={styles.infoUser}>
                <div>
                  <p>Participará de um torneio</p>
                  <span>Nome do torneio</span>
                </div>
                <button>Inscrições abertas</button>
             </div>
          </div>
      </div>
    </div>
  )
}