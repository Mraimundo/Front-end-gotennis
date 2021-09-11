import {useRouter} from 'next/router';
import Image from 'next/image';
import {  RiMedalFill } from "react-icons/ri";
import {  CgSelect} from "react-icons/cg";
import {  FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";

import styles from './styles.module.scss';


export function GameKeys () {
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
          <li>
            <a>Jogos</a>
          </li>
          <li>
            <a>Chaves</a>
          </li>
          <li>
            <a>Informações</a>
          </li>
        </ul>
        <div className={styles.searchcontainer}>
          <div className={styles.selectButton}>
            <span>11 Anos Masculino Simples - Amare...</span>
            <CgSelect/>
          </div>
          <div className={styles.divButtons}>
            <button className={styles.buttonReal}>Realizados</button>
            <button  className={styles.buttonPro}>Próximos Jogos</button>
          </div>
        </div>

        <div className={styles.arrowContent}>
          <FaArrowLeft/>
          <p>Oitavas</p>
          <FaArrowRight/>
        </div>

        <div className={styles.infoContainer}>
          <p>10 de novembro de 2020</p>
          <div className={styles.infoBox}>
            <div className={styles.infoContent}>
              <div>
                <p>1° Fase | Grupo 1</p>
                <span>14:30</span>
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

        <div className={styles.infoContainer}>
          <p>08 de novembro de 2020</p>
          <div className={styles.infoBox}>
            <div className={styles.infoContent}>
              <div>
                <p>1° Fase | Grupo 1</p>
                <span>14:30</span>
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
    </div>
  )
}