import Image from 'next/image';
import {  BsArrowRightShort } from "react-icons/bs";
import {  AiFillPlusCircle } from "react-icons/ai";


import styles from './styles.module.scss';


export function CreatingGame () {
  return(
    <div className={styles.tournamentsContainer} >
      <div className={styles.title}>
        <h1>Novo jogo rápido</h1>
      </div>
      <div className={styles.Wrapper}> 
        <div className={styles.WrapperContent} >
          <div className={styles.HeaderContent}>
            <p>Tipo de partida</p>
          </div>
          <div className={styles.participanteContent}>
            <p>Quem participará?</p>
            <div>
              <AiFillPlusCircle/>
              <span>Selecionar oponente</span>
            </div>
          </div>
          <div className={styles.dataContent}>
            <p>Quando?</p>
            <div className={styles.dataInfo}>
              <div>
                <input type="date" />
                <input type="time" /> 
              </div>
              <span>Pedimos antes para disponibilizar quadras que não possui agenda neste horário</span>
            </div>
          </div>
          <div className={styles.localContent}>
            <p>Onde?</p>
            <input type="text" placeholder="Faça sua busca"/>
          </div>
        </div>
      </div>
      <button className={styles.btnContinuar}>
        <span>Continuar</span>
        <BsArrowRightShort/>
      </button>
    </div>
  )
}