import {useRouter} from 'next/router';
import Image from 'next/image';
import {  GrFormSearch } from "react-icons/gr";
import {  FaTableTennis, FaUser } from "react-icons/fa";

import styles from './styles.module.scss';


export function Information () {
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
          <li onClick={()=> router.push("/information")}>
            <a>Informações</a>
          </li>
        </ul>
        <main className={styles.wrapper}>
          <div className={styles.wrapperContainer}>
            <div className={styles.wrapperInfo}>
              <button>Inscreva-se</button>
              <p>você será redirecionado</p>
            </div>
              <span>Em São Paulo - SP</span>
              <span>De 02/12/2020 até 30/12/2020</span>
            <div className={styles.tableContainer}>
              <div className={styles.tableContent1}>
                <h2>Categorias</h2>
                <table>
                  <tr>
                    <td>Nome da categoria 1</td>
                    <td>14 inscritos</td>
                  </tr>
                  <tr>
                    <td>Nome da categoria 1</td>
                    <td>10 inscritos</td>
                  </tr>
                  <tr>
                    <td>Nome da categoria 1</td>
                    <td>08 inscritos</td>
                  </tr>
                  <tr>
                    <td>Nome da categoria 1</td>
                    <td>04 inscritos</td>
                  </tr>
                  <tr>
                    <td>Nome da categoria 1</td>
                    <td>14 inscritos</td>
                  </tr>
                </table>
              </div>
              <div className={styles.tableContent2}>
                <div className={styles.headerContent}>
                  <h2>Locais de jogos</h2>
                  <p>Clube Italo Brasileiro</p>
                  <span>Rua Renato Nascimento Daher Carneiro, 1036 São Paulo - SP 03 Pisos de Saibro e 01 Piso de Beach Tennis Bolsas usadas: Bolas Head</span>
                </div>
                <div className={styles.footerContent}>
                  <h2>Arbitragem</h2>
                  <p>José Aparecido Souza</p>
                </div>
              </div>
            </div>
          </div> 
        </main>
        <button className={styles.btnFooter}>Regulamento</button>
      </div>
    </div>
  )
}