import styles from '../styles/index.module.scss';

import { Cadastro} from "../components/Cadastro"
import { Layout } from '../components/Layout';
export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Cadastro />
      </div>
    </Layout>
   
  )
}
