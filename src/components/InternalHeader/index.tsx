import Image from 'next/image';
import styles from './styles.module.scss';

export function InternalHeader() {
  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/logo.svg" alt="User" width={120} height= {35}/>
        <div className={styles.user}>
          <div>
            <Image src="/amanda.png" alt="User" width={50} height= {50}/>
          </div>
          <div className={styles.userContent}>
            <div>
              <p>Amanda</p>
              <span>@amandanunes</span>
              {/* <select>
              <option>Opção 1</option>
              <option>Opção 2</option>
              <option>Opção 3</option>
              <option>Opção 4</option>
            </select> */}
            </div>
            <div className={styles.image}>
              <Image src="/notification.svg" alt="User" width={20} height= {20}/>
            </div>
          </div>
        </div>
      </div>
     
    </header>
  );
}