import { InternalHeader } from "../InternalHeader";
import { SideBar } from "../SideBar";
import { Setion } from "../Setion";

import styles from './styles.module.scss';

export function CustomLayout(
  {children}
) {
  return (
    <div className={styles.containerLayout}>
      <InternalHeader />
      <main>
        <SideBar/>
          {children}
        <Setion/> 
      </main>
       
    </div>
  );
}