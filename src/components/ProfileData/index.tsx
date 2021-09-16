import {useRouter} from 'next/router';

import {  AiFillCamera } from "react-icons/ai";
import {  CgSelect} from "react-icons/cg";

import Image from 'next/image';
import styles from './styles.module.scss';


export function ProfileData () {
  const router= useRouter()
  function handleSubmit(e) {
    e.preventDefault()
    // router.push("/cards")
  }
  return(
    <div className={styles.tournamentsContainer} >
      <div className={styles.title}>
        <h1>Perfil</h1>
      </div>
      <div className={styles.tournamentsContent} >
        <ul className={styles.list}>
          <li onClick={()=> router.push("/profile_data")}>
            <a>Dados pessoais</a>
          </li>
          <li onClick={()=> router.push("/change_password")}>
            <a>Alterar senha</a>
          </li>
          <li onClick={()=> router.push("/social_networks")}>
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
              <form onSubmit={handleSubmit} className={styles.formInfo}>
                <div className={styles.divInfo}>
                  <input type="text" placeholder="Amanda"/>
                  <input type="text" placeholder="Nunes"/>
                </div>
                <div className={styles.divImail}>
                  <input type="email" placeholder="@amandanunes"/>  
                </div>
                <div className={styles.selectButton}>
                  <span>São Paulo</span>
                  <CgSelect/>
                </div>
                <div className={styles.selectButton}>
                  <span>São Paulo</span>
                  <CgSelect/>
                </div>
                <div className={styles.selecttitle}>
                  <p>Joga com a mão</p>
                </div>
                <div className={styles.divButtons}>
                  <div className={styles.radioButtons}>
                    <input type="radio" />
                    <span>Mão direita</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>Mão esquerda</span>
                  </div>
                </div>
                <button>Salvar dados</button>
              </form>
             
            </div>
          </section>
        </main> 
      </div>
    </div>
  )
}