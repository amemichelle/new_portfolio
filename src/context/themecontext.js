import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "default"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.remove("theme--dark", "theme--default");
    document.body.classList.add(`theme--${theme}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "default" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
