import styles from "./App.module.scss";
import { Dashboard } from "./features/dashboard/dashboard/dashboard";

function App() {
  return (
    <div className={styles["app"]}>
      <Dashboard />
    </div>
  );
}

export default App;
