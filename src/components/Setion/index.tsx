import Image from 'next/image';
import styles from './styles.module.scss';


export function Setion () {
  return(
    <div className={styles.setionContainer} >
      <div>
        <Image src="/aside-direita-1.png" width={254} height={296} alt="Arrow" />
      </div>
      <div>
        <Image src="/aside-direita-2.png" width={254} height={296} alt="Arrow" />
      </div>
    </div>
  )
}