import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const SUN_ICON = <FontAwesomeIcon icon={faSun} style={{ color: "#ffffff" }} />;
const MOON_ICON = <FontAwesomeIcon icon={faMoon} />;

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? SUN_ICON : MOON_ICON}
    </button>
  );
}
