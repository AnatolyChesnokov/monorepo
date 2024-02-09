import styles from './ui.module.scss';

/* eslint-disable-next-line */
export interface UiProps {
  data: Array<string>
}

export function Ui(props: UiProps) {
  return (
    <div className={styles.section}>
      <h1>Shared UI</h1>
      {props.data.map((item) => {
        return <div key={item} className={styles.data}>{item}</div>
      })}
    </div>
  );
}

export default Ui;
