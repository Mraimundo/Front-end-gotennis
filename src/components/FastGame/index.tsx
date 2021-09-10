import { useState } from 'react';

import {  GrFormEdit } from "react-icons/gr";
import {  FaUser } from "react-icons/fa";
import Image from 'next/image';


import styles from './styles.module.scss';


export function FastGame () {
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
                <p>Nome do local</p>
                <GrFormEdit/>
              </div>
              <div onClick={() => setActive(!active)} className={`${styles.beach} ${active ? styles.activemain : null}`}>
                <Image src="/amanda-1.png" alt="Amanda" width={60} height={60}/> 
                <p>Amanda Nunes (você)</p>
              </div>
              <div className={styles.beachTennis}>
                <Image src="/eduardo-1.jpg" alt="Eduardo" width={60} height={60}/> 
                <p>Eduardo Silva</p>
                <button>Confirmando</button>
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
                    <p>Nome do local</p>
                    <GrFormEdit/>
                  </div>
                  <div onClick={() => setActive(!active)} className={`${styles.beach} ${active ? styles.activemain : null}`}>
                    <Image src="/amanda-1.png" alt="Amanda" width={60} height={60}/> 
                    <p>Amanda Nunes (você)</p>
                  </div>
                  <div className={styles.beachTennis}>
                    <Image src="/eduardo-1.jpg" alt="Eduardo" width={60} height={60}/> 
                    <p>Eduardo Silva</p>
                    <button>Confirmando</button>
                  </div>
                </div>
              </section>
            </main> 
        </div>
    </div>
  )
}