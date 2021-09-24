import Image from 'next/image';
import {useRouter} from 'next/router';
import Link from 'next/link';

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import {BiUserPlus} from "react-icons/bi";

import styles from './styles.module.scss';
import router from 'next/router';


export function UserProfile () {
  const router= useRouter()
  return(
    <div className={styles.profileContainer} >
      <div className={styles.userAdd}> 
        <Image src="/amanda-01.svg" width={100} height={100} alt="Profile" />
        <div>
          <BiUserPlus/>
          <span>seguir</span>
        </div>
      </div>
      <div>
        <Image src="/profile-01.png" width={750} height={90} alt="Profile" />
      </div>
      <div className={styles.profileContent}>
        <div className={styles.profileContentInfo}>
          <div>
            <p>@amandanunes</p>
            <span>Amanda dos Santos Nunes</span>
          </div>
          <div className={styles.sociaMidia}>
            <div>
              <FaFacebook/>
            </div>
            <div>
              <FaInstagram/>
            </div>
            <div>
              <FaLinkedin/>
            </div>
            <div>
              <FaYoutube/>
            </div>
          </div>
        </div>
        <div className={styles.containerFooter}>
          <div className={styles.info}>
            <p>36 Anos</p>
            <p>São Paulo - SP - Brasil</p>
            <p>Joga com a mão direita.</p>
          </div>
          <div className={styles.contentFooter}>
            <div>
              <p>230</p>
              <span>seguidores</span>
            </div>
            <div>
              <p>100</p>
              <span>publicações</span>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.listContainer}>
          <ul>
            <li onClick={()=> router.push("/performance")}>
              <a>Desempenho</a>
            </li>
            <li onClick={()=> router.push("/activities")}>
              <a>Atividades</a>
            </li>
            <li>
              <a>Colocações</a>
            </li>
            <li>
              <a>Programação</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}