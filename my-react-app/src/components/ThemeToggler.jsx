import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggler() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "white" : "#222",
    color: theme === "light" ? "black" : "white",
    padding: "40px",
    textAlign: "center",
    
  };

  return (
    <div style={style}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeToggler;
