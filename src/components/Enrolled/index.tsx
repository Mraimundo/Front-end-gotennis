import Image from 'next/image';
import {  GrFormSearch } from "react-icons/gr";
import {  CgSelect} from "react-icons/cg";

import {  FaTableTennis, FaUser } from "react-icons/fa";

import styles from './styles.module.scss';


export function Enrolled () {
  return(
    <div className={styles.postsContainer} >
     <div className={styles.title}>
      <h1>Inscritos</h1>
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
            <div>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
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
          </div>

          <div className={styles.userInfo}>
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
          </div>

          <div className={styles.userInfo}>
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
         
        </div> 
      </main> 
    </div>
  )
}