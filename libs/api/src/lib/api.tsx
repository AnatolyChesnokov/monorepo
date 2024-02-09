import styles from './api.module.scss';
import {Ui} from "@monorepo/ui";

/* eslint-disable-next-line */
export interface ApiProps {}

export function Api(props: ApiProps) {
  return (
    <div className={styles['container']}>
      <Ui data={['1', '2']} />
      <h1>Welcome to Api!</h1>
    </div>
  );
}

export default Api;
