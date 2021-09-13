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
        <div className={styles.footerContainer}>
          <p>1 Jan até 30 de Out 2020</p>
          <div className={styles.footerContent}>
            <p>12 categorias</p>
            <div>
              <FaTableTennis/>
              <span>193 jogos</span>
            </div>
            <div>
              <FaUser/>
              <span>56 participantes</span>
            </div>
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
            <div>
              <Image src="/evandro.svg" alt="Onde Jogar" width={40} height={40}/>
              <p>Evandro Silva</p>
            </div>
            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Pedro Cabral</p>
            </div>
            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Ana Couto</p>
            </div>
            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Wagner Souza</p>
            </div>

            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Marcelo Augusto</p>
            </div>
            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>João Vitor</p>
            </div>
            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Patricia Silva</p>
            </div>
            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>André Oliveira</p>
            </div>

            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Marisa Monte</p>
            </div>
            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Eduarda Lima</p>
            </div>
            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Rafael dos Santos</p>
            </div>
            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Jéssica Soares</p>
            </div>
          </div>

      </main> 
        
      </div>
    </div>
  )
}