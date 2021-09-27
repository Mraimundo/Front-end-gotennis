import { Aside } from "../Aside";
import { Header } from "../Header";

import styles from './styles.module.scss';

export function Layout(
  {children}
) {
  return (
    <div className={styles.containerLayout}>
      <Aside/>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}