import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${styles["app"]} ${styles[theme]}`} onClick={toggleTheme}>
      <Outlet />
    </div>
  );
}

export default App;
