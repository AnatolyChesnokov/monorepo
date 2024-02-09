// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import {Ui} from "@monorepo/ui";

export function App() {
  return (
    <div>
      <Ui data={['какая', 'то', 'дата']} />
      <NxWelcome title="kassa-4" />
    </div>
  );
}

export default App;
