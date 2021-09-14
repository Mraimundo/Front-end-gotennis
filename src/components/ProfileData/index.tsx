import {useRouter} from 'next/router';

import {  AiFillCamera } from "react-icons/ai";
import {  FaUser } from "react-icons/fa";

import Image from 'next/image';
import styles from './styles.module.scss';


export function ProfileData () {
  const router= useRouter()
  return(
    <div className={styles.tournamentsContainer} >
      <div className={styles.title}>
        <h1>Perfil</h1>
      </div>
      <div className={styles.tournamentsContent} >
        <ul className={styles.list}>
          <li onClick={()=> router.push("/internal_tournament")}>
            <a>Dados pessoais</a>
          </li>
          <li>
            <a>Alterar senha</a>
          </li>
          <li>
            <a>Redes sociais</a>
          </li>
        </ul>
        <main className={styles.wrapper}>
          <section  className={styles.sectionContainer}>
            <div className={styles.sectionContent}>
              <div className={styles.sectionFoto}>
                <Image src="/amanda-01.svg" alt="" width={101} height={101}/>
              </div>
              <div className={styles.alterarFoto}>
                <AiFillCamera/>
                <p>Alterar foto</p>
              </div>
              <form action="">
                <div>
                    <input type="text" placeholder="Amanda"/>
                    <input type="text" placeholder="Nunes"/>
                </div>
                <div>
                  
                </div>
              </form>
            </div>
          </section>
        </main> 
      </div>
    </div>
  )
}