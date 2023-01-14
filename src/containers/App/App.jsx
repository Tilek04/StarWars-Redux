
import styles from './App.module.css';
import cn from "classnames";

function App() {
  return (
    <h1 className={cn(styles.header, styles.text)}>
     Hello world
    </h1>
  );
}

export default App;
