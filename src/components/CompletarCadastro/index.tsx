import Image from 'next/image';

import {useRouter} from 'next/router';
import styles from './styles.module.scss';

export function CompletarCadastro() {
  const router= useRouter()
  function handleSubmit(e) {
    e.preventDefault()
    router.push("/cards")
  }
  return (
    <div className={styles.cadastroContainer}>
      <h2>Complete seu cadastro</h2>
      <form onSubmit={handleSubmit} className={styles.formContent}>
          <input type="text" placeholder="Nome" className={styles.emptyEmail}/>
          <input type="text" placeholder="Sobrenome"/>
          <label>
              <input type="checkbox"/>
              <span>
               aceito os termos de uso
              </span>
          </label>
          <button>
              <span>Continuar</span>
              <Image src="/arrow.png" width={23} height={23} alt="Arrow" />
          </button>
      </form>
    </div>
  );
}