import {useRouter} from 'next/router';
import Image from 'next/image';
import {  GrFormSearch } from "react-icons/gr";
import {  CgSelect} from "react-icons/cg";
import {  FaUser } from "react-icons/fa";

import styles from './styles.module.scss';


export function Winners () {
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
          <li onClick={()=> router.push("/game_keys")}>
            <a>Chaves</a>
          </li>
          <li onClick={()=> router.push("/winners")}>
            <a>Informações</a>
          </li>
        </ul>
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
                <span>1</span>
                <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
                <p>Evandro Silva</p>
              </div>
              <div>
                <span>2</span>
                <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
                <p>Pedro Cabral</p>
             </div>
              <div>
                <span>3</span>
                <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
                <p>Ana Couto</p>
              </div>
              <div>
                <span>4</span>
                <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
               <p>Wagner Souza</p>
            </div>
          </div>

          <div className={styles.userInfo}>
            <div>
              <span>5</span>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Marcelo Augusto</p>
            </div>
            <div>
              <span>6</span>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>João Vitor</p>
            </div>
            <div>
              <span>7</span>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Patricia Silva</p>
            </div>
            <div>
              <span>8</span>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>André Oliveira</p>
            </div>
          </div>

          <div className={styles.userInfo}>
            <div>
              <span>09</span>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Marisa Monte</p>
            </div>
            <div>
              <span>10</span>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Eduarda Lima</p>
            </div>
            <div>
              <span>11</span>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Rafael dos Santos</p>
            </div>
            <div>
              <span>12</span>
              <Image src="/inscritos.png" alt="Onde Jogar" width={40} height={40}/>
              <p>Jéssica Soares</p>
            </div>
          </div>
         
        </div> 
      </main> 
        
      </div>
    </div>
  )
}