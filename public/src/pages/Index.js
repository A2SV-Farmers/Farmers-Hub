import NavBar from "../components/NavBar";
import styles from "./Index.module.css";

const App1 = () => {
  return (
    <div className={styles.index}>
      <div className={styles.appContent}>
        <NavBar />
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default App1;
