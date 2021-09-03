import Image from 'next/image';
import styles from './styles.module.scss';


export function UserProfile () {
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
          <div>
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
      </div>
    </div>
  )
}