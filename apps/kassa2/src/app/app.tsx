// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import {Ui} from "@monorepo/ui";

export function App() {
  const array = ['Пики точеные', 'Стулья перевернутые', 'Конец'];
  return (
    <div>
      <Ui data={array} />
      <NxWelcome title="kassa2" />
    </div>
  );
}

export default App;
