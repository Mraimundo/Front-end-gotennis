import {useRouter} from 'next/router';

import {  FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";

import Image from 'next/image';
import styles from './styles.module.scss';


export function SocialNetworks () {
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
              <form onSubmit={handleSubmit} className={styles.formInfo}>
                <div className={styles.divFace}>
                  <label>Facebook</label>
                  <input type="text" placeholder="Link do seu perfil"
                    // <FaFacebook/>
                  />  
                </div>
                <div className={styles.divInsta}>
                  <label>Instagram</label>
                  <input type="text" placeholder="Link do seu perfil"/>  
                </div>
                <div className={styles.divLink}>
                  <label>LinkedIn</label>
                  <input type="text" placeholder="Link do seu perfil"/>  
                </div>
                <div className={styles.divYout}>
                  <label>Youtube</label>
                  <input type="text" placeholder="Link do seu perfil"/> 
                </div>
                <button>Salvar redes sociais</button>
              </form>
             
            </div>
          </section>
        </main> 
      </div>
    </div>
  )
}