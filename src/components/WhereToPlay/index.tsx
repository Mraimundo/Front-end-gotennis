import Image from 'next/image';
import {  FaTableTennis, FaUser } from "react-icons/fa";

import styles from './styles.module.scss';


export function WhereToPlay () {
  return(
    <div className={styles.tournamentsContainer} >
      <div className={styles.title}>
        <h1>Onde Jogar</h1>
        <button>Buscar</button>
      </div>
      <div className={styles.tournamentsContent} >
        <div className={styles.list}>
          <p>Agendados</p>
        </div>
        <div className={styles.dateInfo}>
          <p>10 de dezembro de 2020 às 19:00hs</p>
        </div>
        <main className={styles.wrapper}>
            <div className={styles.sectionContainer}>
              <div className={styles.sectionContent}>
                <Image src="/onde-jogar.svg" alt="Onde Jogar" width={650} height={291}/>
                <div className={styles.sectionInfo}>
                  <h1>Nome da quadra</h1>
                  <p>Rua das flores 123, Jd. Primavera, </p>
                  <span>São Paulo -SP</span>
                </div>
                <div className={styles.btns}>
                  <button className={styles.btnBlue}>Detalhes</button>
                  <button className={styles.btncancel}>Cancelar agendamento</button>
                </div>
              </div>
            </div>
        </main> 
      </div>
    </div>
  )
}