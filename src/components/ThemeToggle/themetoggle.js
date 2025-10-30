import { ReactComponent as Moon } from "../../assets/moon.svg";
import { useTheme } from "../../context/themecontext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return <Moon className="moon-button" onClick={toggleTheme} />;
}

export default ThemeToggle;
