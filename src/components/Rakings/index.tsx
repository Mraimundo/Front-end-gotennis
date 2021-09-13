import { useRouter } from 'next/router';

import Image from 'next/image';
import { GrFormSearch } from "react-icons/gr";
import { FaTableTennis, FaUser } from "react-icons/fa";

import styles from './styles.module.scss';


export function Rankings() {
  const router = useRouter()
  return (
    <div className={styles.postsContainer} >
      <div className={styles.title}>
        <h1>Torneios</h1>
      </div>
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
          <GrFormSearch />
          <input type="search" placeholder="buscar" />
        </div>
        <div>
          <button type="submit">Filtros</button>
        </div>
      </div>
      <main className={styles.wrapper}>
        <header className={styles.headerContainer}>
          <button className={styles.btnProgress}>Em andamento</button>
          <button className={styles.btnConcluded}>Concluídos</button>
          <button className={styles.btnAll}>Todos</button>
        </header>
        <div>
          <p>2020</p>
        </div>
        <section onClick={()=> router.push("/internal_rankigs")} className={styles.sectionContainer}>
          <div className={styles.sectionContent}>
            <Image src="/top-tennis.svg" alt="User" width={81} height={81} />
            <div className={styles.sectionInfo}>
              <p>2020 - TOP TENIS BEACH TENIS</p>
              <span>01 Jan até 30 out 2020</span>
              <div className={styles.sectionDetails}>
                <div>
                  <FaTableTennis />
                  <span>139</span>
                </div>
                <div>
                  <FaUser />
                  <span>58</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionContainer}>
          <div className={styles.sectionContent}>
            <Image src="/top-tennis.svg" alt="User" width={81} height={81} />
            <div className={styles.sectionInfo}>
              <p>2020 - TOP TENIS BEACH TENIS</p>
              <span>01 Jan até 30 out 2020</span>
              <div className={styles.sectionDetails}>
                <div>
                  <FaTableTennis />
                  <span>139</span>
                </div>
                <div>
                  <FaUser />
                  <span>58</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionContainer}>
          <div className={styles.sectionContent}>
            <Image src="/top-tennis.svg" alt="User" width={81} height={81} />
            <div className={styles.sectionInfo}>
              <p>2020 - TOP TENIS BEACH TENIS</p>
              <span>01 Jan até 30 out 2020</span>
              <div className={styles.sectionDetails}>
                <div>
                  <FaTableTennis />
                  <span>139</span>
                </div>
                <div>
                  <FaUser />
                  <span>58</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}