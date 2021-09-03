import Image from 'next/image';

import {useRouter} from 'next/router';
import styles from './styles.module.scss';

export function CardsUse() {
  const router= useRouter()
  return (
    <div className={styles.cardsContainer}>
      <h2>Perfeito, como deseja utilizar o GoTennis?</h2>
      <div className={styles.cardsContent}>
        <div className={styles.card}>
          <Image src="/tenista.svg" alt="Tenista Amador" width={104} height={104}/>
          <p>Sou tenista amador e quero saber das novidades, interagindo com outros</p>
        </div>
        <div className={styles.card}>
          <Image src="/associacao.svg" alt="Tenista Amador" width={104} height={104}/>
          <p>Representamos uma associação e queremos cadastrar campeonatos e rankings</p>
        </div>
        <div className={styles.card}>
          <Image src="/conteudo.svg" alt="Criador de conteudo" width={104} height={104}/>
          <p>Sou criador de conteúdo e queremos falar das novidades do mundo do Tênis</p>
        </div>
        <div className={styles.card}>
          <Image src="/quadra.svg" alt="Dono da quadra" width={104} height={104}/>
          <p>Sou dono de quadra de Tênis e gostaria de anunciar os meus serviços</p>
        </div>
      </div>
    </div>
  );
}