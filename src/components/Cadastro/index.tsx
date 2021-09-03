import Image from 'next/image';

import {useRouter} from 'next/router';
import styles from './styles.module.scss';

export function Cadastro() {
  const router= useRouter()
  return (
    <div className={styles.cadastroContainer}>
      <h2>Cadastre-se</h2>
      <div className={styles.emptyFacebook} >
        <Image src="/facebook.svg" width={34} height= {34} alt="Facebook" />
        <button>Registrar com Facebook</button>
      </div>
      <div className={styles.emptyGoogle}>
        <Image src="/icon-google.svg" width={34} height= {34} alt="Google" />
        <button>Registrar com Google</button>
      </div>
        <p>ou use seu email</p>
      <form>
          <input type="email" placeholder="email" className={styles.emptyEmail}/>
          <input type="password" placeholder="senha"/>
          <button onClick={()=> router.push("/completar_registro")}type="submit">Cadastrar</button>
      </form>
    </div>
  );
}