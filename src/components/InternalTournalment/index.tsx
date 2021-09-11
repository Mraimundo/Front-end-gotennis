import {useRouter} from 'next/router';
import Image from 'next/image';
import {  GrFormSearch } from "react-icons/gr";
import {  FaTableTennis, FaUser } from "react-icons/fa";

import styles from './styles.module.scss';


export function InternalTournalment () {
  const router= useRouter()
  return(
    <div className={styles.internalContainer} >
      <h1>ITF $15.000 Mormaii Garobapa Open  CONSOLAÇÃO</h1>
      <div className={styles.headerInfo}>
        <div className={styles.title}>
          <button className={styles.btnStarting}>Iniciando</button> 
          <button onClick={()=> router.push("/enrolled")} className={styles.btnUser}>
            <FaUser/>
            <span>400 Inscritos</span>
          </button>
        </div>
      </div>
      <div className={styles.internalContent} >
        <ul className={styles.list}>
          <li onClick={()=> router.push("/internal_tournament")}>
            <a>Notícias</a>
          </li>
          <li onClick={()=> router.push("/winners")}>
            <a>Classificações</a>
          </li>
          <li onClick={()=> router.push("/games")}>
            <a>Jogos</a>
          </li>
          <li>
            <a>Chaves</a>
          </li>
          <li>
            <a>Informações</a>
          </li>
        </ul>
        <main className={styles.wrapper}>
            <div className={styles.sectionContainer}>
              <div className={styles.sectionContent}>
                <Image src="/onde-jogar.svg" alt="Onde Jogar" width={710} height={291}/>
                <div className={styles.sectionInfo}>
                  <span>10 de dezembro de 2020</span>
                  <p>Opus igitur est omni specie, “Tu autem in specie, non videntur, nec res est</p>
                </div>
              </div>
            </div>
        </main> 
        <main className={styles.wrapper}>
            <div className={styles.sectionContainer}>
              <div className={styles.sectionContent}>
                <Image src="/mulher-tennis.png" alt="Publicação" width={710} height={291}/>
                <div className={styles.sectionInfo}>
                  <span>10 de dezembro de 2020</span>
                  <p>Opus igitur est omni specie, “Tu autem in specie, non videntur, nec res est</p>
                </div>
              </div>
            </div>
        </main> 
      </div>
    </div>
  )
}