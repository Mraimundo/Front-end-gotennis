import Image from 'next/image';
import styles from './styles.module.scss';

export function InternalHeader() {
  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/logo.svg" alt="User" width={190} height= {35}/>
      <div className={styles.user}>
        <div>
          <Image src="/amanda.png" alt="User" width={64} height= {64}/>
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
            <Image src="/notification.svg" alt="User" width={24} height= {26}/>
          </div>
        </div>
      </div>
      </div>
     
    </header>
  );
}