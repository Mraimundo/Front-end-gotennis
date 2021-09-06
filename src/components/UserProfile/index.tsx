import Image from 'next/image';
import {useRouter} from 'next/router';
import Link from 'next/link';

import { BiCaretDown } from "react-icons/bi";
import {  GiHamburgerMenu, GiTennisCourt } from "react-icons/gi";
import {  RiMedalFill } from "react-icons/ri";
import {  FaSignOutAlt, FaCog } from "react-icons/fa";
import styles from './styles.module.scss';
import { Performance } from '../Performance';
import { Graphics } from '../Graphics';
import router from 'next/router';


export function UserProfile () {
  const router= useRouter()
  return(
    <div className={styles.profileContainer} >
      <Image src="/profile-01.png" width={940} height={90} alt="Profile" />
      <div className={styles.profileContent}>
        <div className={styles.profileContentInfo}>
          <div>
            <p>@amandanunes</p>
            <span>Amanda dos Santos Nunes</span>
          </div>
          <div className={styles.sociaMidia}>
            <div>
              <Image src="/profile-facebook.svg" width={28} height={28} alt="Facebook" />
            </div>
            <div>
              <Image src="/profile-instagram.svg" width={28} height={28} alt="Instagram" />
            </div>
            <div>
              <Image src="/profile-linkedin.svg" width={28} height={28} alt="Linkedin" />
            </div>
            <div>
              <Image src="/profile-youtube.svg" width={28} height={28} alt="Youtube" />
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
              {/* <Link href="/performance"/> */}
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