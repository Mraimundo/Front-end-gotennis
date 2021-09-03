import Image from 'next/image';
import styles from './styles.module.scss';

export function Header() {
  
  return (
    <header className={styles.headerContainer}>
      <p>Já tem um cadastro?</p>
      <div className={styles.userButton}>
        <Image src="/user.png" alt="User" width={18} height= {20}/>
        <button>Entrar</button>
      </div>
    </header>
  );
}