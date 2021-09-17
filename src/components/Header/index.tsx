import Image from 'next/image';
import { FaUserAlt} from "react-icons/fa";
import styles from './styles.module.scss';

export function Header() {
  
  return (
    <header className={styles.headerContainer}>
      <p>Já tem um cadastro?</p>
      <button className={styles.userButton}>
        <FaUserAlt/>
        <p>Entrar</p>
      </button>
    </header>
  );
}