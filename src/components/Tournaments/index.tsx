import {useRouter} from 'next/router';

import {  GrFormSearch } from "react-icons/gr";
import {  FaUser } from "react-icons/fa";

import styles from './styles.module.scss';


export function Tournaments () {
  const router= useRouter()
  return(
    <div className={styles.tournamentsContainer} >
      <div className={styles.title}>
        <h1>Torneios</h1>
        <button>Novo jogo</button>
      </div>
      <div className={styles.tournamentsContent} >
        <ul className={styles.list}>
          <li>
            <a>Pela CBT</a>
          </li>
          <li>
            <a>Pelas Federações</a>
          </li>
          <li>
            <a>Pelos clubes</a>
          </li>
        </ul>
        <div className={styles.searchcontainer}>
          <div className={styles.divBuscar}>
            <GrFormSearch/> 
            <input type="search" placeholder="buscar"/>
          </div>
          <div>
            <button type="submit">Filtros</button>
          </div>
        </div>
        <div className={styles.dateInfo}>
          <p>Dezembro de 2020</p>
        </div>
        <main className={styles.wrapper}>

          <section onClick={()=> router.push("/internal_tournament")} className={styles.sectionContainer}>
            <div className={styles.sectionContent}>
              <p>ITF $15.000 Mormaii Garobapa Open CONSOLAÇÃO</p>
              <div className={styles.beachTennis}>
                <span>Beach Tennis 2019 - IFT $ 15.000 (CONSOLAÇÃO)</span>
              </div>
              <div className={styles.sectionDetails}>
                <div className={styles.btn}>
                  <span className={styles.colorBtn}>Inscrições Abertas</span>
                </div>
                <div>
                  <FaUser/>
                  <span>400</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionContainer}>
            <div className={styles.sectionContent}>
              <p>ITF $15.000 Mormaii Garobapa Open CONSOLAÇÃO</p>
              <div className={styles.beachTennis}>
                <span>Beach Tennis 2019 - IFT $ 15.000 (CONSOLAÇÃO)</span>
              </div>
              <div className={styles.sectionDetails}>
                <div className={styles.yellowBtn}>
                  <span className={styles.colorYellow}>Inscrições Encerradas</span>
                </div>
                <div>
                  <FaUser/>
                  <span>400</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionContainer}>
            <div className={styles.sectionContent}>
              <p>ITF $15.000 Mormaii Garobapa Open CONSOLAÇÃO</p>
              <div className={styles.beachTennis}>
                <span>Beach Tennis 2019 - IFT $ 15.000 (CONSOLAÇÃO)</span>
              </div>
              <div className={styles.sectionDetails}>
                <div className={styles.blueBtn}>
                  <span className={styles.colorBlue}>Iniciando</span>
                </div>
                <div>
                  <FaUser/>
                  <span>400</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionContainer}>
            <div className={styles.sectionContent}>
              <p>ITF $15.000 Mormaii Garobapa Open CONSOLAÇÃO</p>
              <div className={styles.beachTennis}>
                <span>Beach Tennis 2019 - IFT $ 15.000 (CONSOLAÇÃO)</span>
              </div>
              <div className={styles.sectionDetails}>
                <div className={styles.redBtn}>
                  <span className={styles.colorRed}>Cancelado</span>
                </div>
                <div>
                  <FaUser/>
                  <span>400</span>
                </div>
              </div>
            </div>
          </section>
        </main> 
      </div>
    </div>
  )
}