import styles from '../styles/index.module.scss';

import { CompletarCadastro} from "../components/CompletarCadastro"

import { Layout } from '../components/Layout';
export default function CompletarRegisttro() {
  return (
    <Layout>
     <div className={styles.container}>
      <CompletarCadastro/>
     </div>
    </Layout>
   
  )
}
