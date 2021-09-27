import { useState } from 'react';

import {  GrFormEdit } from "react-icons/gr";
import {  FaUser } from "react-icons/fa";
import Image from 'next/image';


import styles from './styles.module.scss';


export function Guest () {
  const [active, setActive] = useState(false);
  return(
    <div className={styles.tournamentsContainer} >
      <div className={styles.title}>
        <h1>Jogo rápido</h1>
        <button>Novo jogo</button>
      </div>
      <div className={styles.tournamentsContent} >
        <ul className={styles.list}>
          <li>
            <a>Próximo jogo</a>
          </li>
          <li className={styles.details} >
            <a>Convites</a>
            <span>4</span>
          </li>
          <li>
            <a>Jogos realizados</a>
          </li>
        </ul>
        <div className={styles.dateInfo}>
          <p>10 de novembro de 2020</p>
        </div>
        <main className={styles.wrapper}>
          <section className={styles.sectionContainer}>
            <div className={styles.sectionContent}>
              <div className={styles.sectionEdit}>
                <p>Nome do local às 19:00</p>
                <span>Simples</span>
              </div>
              <div className={styles.beachTennis}>
                <Image src="/eduardo-1.jpg" alt="Eduardo" width={50} height={50}/> 
                <p>Eduardo Silva</p>
              </div>
              <div className={styles.beachButtons}>
                <button className={styles.btnOne}>Detalhes</button>
                <button className={styles.btnTwo}>Rejeitar</button>
              </div>
            </div>
          </section>
        </main> 
        <div className={styles.dateInfo}>
          <p>10 de novembro de 2020</p>
        </div>
        <main className={styles.wrapper}>
          <section className={styles.sectionContainer}>
            <div className={styles.sectionContent}>
              <div className={styles.sectionEdit}>
                <p>Nome do local às 19:00</p>
                <span>Duplas</span>
              </div>
              <div className={styles.beachfooter}>
               <div className={styles.beachDiv}>
                <Image src="/eduardo-1.jpg" alt="Eduardo" width={50} height={50}/> 
                <p>Eduardo Silva</p>
                <button>Anfitrião</button>
               </div>
               <div className={styles.beachDiv}>
                <Image src="/eduardo-1.jpg" alt="Eduardo" width={50} height={50}/> 
                <p>Osvaldo Pereira</p>
                <button>Confirmando</button>
               </div>
              </div>
              <div className={styles.beachButtons}>
                <button className={styles.btnOne}>Detalhes</button>
                <button className={styles.btnTwo}>Rejeitar</button>
              </div>
            </div>
          </section>
        </main> 
            
      </div>
    </div>
  )
}