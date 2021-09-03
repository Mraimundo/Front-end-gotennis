import Image from 'next/image';
import styles from './styles.module.scss';

export function Aside() {
  
  return (
    <div className={styles.sideContainer}>
      <header className={styles.headerContainer}>
        <Image src="/go-tennis.svg" width={179} height={33}  alt="Tennis"/>
      </header>
      <footer className={styles.footerContainer}>
        <h1>Marque jogos com seus amigos em poucos cliques</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </footer>
    </div>
  );
}