import {useRouter} from 'next/router';
import Image from 'next/image';
import {  GrFormSearch } from "react-icons/gr";
import {  CgSelect} from "react-icons/cg";
import {  FaTableTennis, FaUser } from "react-icons/fa";

import styles from './styles.module.scss';


export function InternalRankigs () {
  const router= useRouter()
  return(
    <div className={styles.internalContainer} >
      <div className={styles.infoHeader}>
        <Image src="/top-tennis.svg" alt="Onde Jogar" width={81} height={81}/>
        <h1>2020 - TOP TENIS BEACH TENIS</h1>
      </div>
      <div className={styles.internalContent} >
        <div className={styles.list}>
          <p>Período</p>
        </div>
        <div className={styles.footerContent}>
          <p>1 Jan até 30 de Out 2020</p>
          <div>
            <p>12 categorias</p>
            <span>193 jogos</span>
            <FaTableTennis/>
          </div>
          <div>
            <FaUser/>
            <span>56 participantes</span>
          </div>
        </div>
        <div className={styles.searchcontainer}>
          <div className={styles.selectButton}>
            <span>Selecione a categoria</span>
            <CgSelect/>
          </div>
          <div className={styles.divBuscar}>
            <GrFormSearch/> 
            <input type="search" placeholder="buscar"/>
          </div>
        </div>

        <main className={styles.wrapper}>
          <div className={styles.wrapperContent}>
            <div className={styles.userInfo}>
              
            </div>
          </div> 
      </main> 
        
      </div>
    </div>
  )
}