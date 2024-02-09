// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import {Ui} from "@monorepo/ui";

export function App() {
  const array = ['Nx', 'Turborepo', 'Monorepo'];
  return (
    <div>
      <Ui data={array} />
      <NxWelcome title="kassa" />
    </div>
  );
}

export default App;
