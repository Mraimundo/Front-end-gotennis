import Image from 'next/image';
import {  GoComment } from "react-icons/go";
import {  FiUserPlus } from "react-icons/fi";
import {  BiDotsHorizontalRounded } from "react-icons/bi";


import styles from './styles.module.scss';


export function Posts () {
  return(
    <div className={styles.postsContainer} >
      <button>
          <GoComment/>
          <span>Deseja publicar algo, Alisson?</span>
      </button>
      <main className={styles.wrapper}>
          <header className={styles.headerContainer}>
            <div className={styles.userInformation}>
              <Image src="/amanda.png" width={40} height={40} alt="Amanda" />
              <div className={styles.info}>
                <p>@amandanunes</p>
                <span>Amanda dos Santos Nunes</span>
              </div>
            </div>
            <div>
              <FiUserPlus/>
              <BiDotsHorizontalRounded />
            </div>
          </header>
          <section className={styles.sectionInfo}>
            <p>Opus igitur est omni specie, “Tu autem in specie, non videntur, nec res est...  mais</p>
            <div>
              <Image src="/post-1.png" width={710} height={393} alt="Post" />
            </div>
          </section>
          <footer className={styles.footerInfo}>
            <div className={styles.bxsHeart}>
              <Image src="/icons/bxs-heart.png" width={28} height={28} alt="Post" />
            </div>
            <div className={styles.bxsShare}>
              <Image src="/icons/bx-share-alt.png" width={28} height={28} alt="Post" />
            </div>
            <div className={styles.bxsComment}>
              <Image src="/icons/bx-comment.png" width={28} height={28} alt="Post" />
            </div>
            <div>
              <span>Seja o primeiro a comentar</span>
              <span className={styles.contentSpan}>Há 03 dias</span>
            </div>          
          </footer>
      </main> 
    </div>
  )
}