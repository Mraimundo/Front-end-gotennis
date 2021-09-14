import Image from 'next/image';

import {  AiFillLike } from "react-icons/ai";
import styles from './styles.module.scss';

export function ShedulingSuccess () {
  return(
    <div className={styles.performanceContainer} >
      <div className={styles.performanceContent} >
        <div className={styles.performanceInfo}>
          <div className={styles.iconLike}>
            <AiFillLike/>
          </div>
          <div>
            <h1>Agendamento efetuado com sucesso</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className={styles.btnToBack}>
            <button>Voltar ao onde jogar</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}