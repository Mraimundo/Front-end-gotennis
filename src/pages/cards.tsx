import styles from '../styles/index.module.scss';

import { CardsUse} from "../components/CardsUse"

import { Layout } from '../components/Layout';
export default function Cards() {
  return (
    <Layout>
     <div className={styles.container}>
      <CardsUse/>
     </div>
    </Layout>
   
  )
}
