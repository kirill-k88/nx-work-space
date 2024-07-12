import { Digit } from '../Digit/Digit';
import styles from './app.module.scss';

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__digits}>
        {digits.map((d) => (
          <Digit number={d} />
        ))}
      </div>
    </div>
  );
}

export default App;
