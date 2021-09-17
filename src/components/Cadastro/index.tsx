import Image from 'next/image';

import {useRouter} from 'next/router';
import { FaFacebook} from "react-icons/fa";
import { FcGoogle} from "react-icons/fc";

import styles from './styles.module.scss';

export function Cadastro() {

  interface userProps {
    email: string;
    senha: string;
  }

  const router= useRouter()

  function handleSubmit(e) {
    e.preventDefault();
    router.push("/completar_registro")
  }

  return (
    <div className={styles.cadastroContainer}>
      <h2>Cadastre-se</h2>
      <button className={styles.emptyFacebook}>
        <FaFacebook/>
        <p>Registrar com Facebook</p>
      </button>
      <button className={styles.emptyGoogle}>
        <FcGoogle/>
        <p>Registrar com Google</p>
      </button>
        <p>ou use seu email</p>
      <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" className={styles.emptyEmail}/>
          <input type="password" placeholder="senha"/>
          <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}