import {useRouter} from 'next/router';

import {  FaUnlockAlt} from "react-icons/fa";

import Image from 'next/image';
import styles from './styles.module.scss';


export function ChangePassword () {
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
                <FaUnlockAlt/>
              </div>
              
              <form onSubmit={handleSubmit} className={styles.formInfo}>
                <div className={styles.divInfo}>
                  <input type="password" placeholder="Digite sua nova senha"/>
                  <input type="password" placeholder="Repita a nova senha"/>  
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