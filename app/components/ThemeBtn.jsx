import { useState, useEffect } from "react";
import { UseTheme } from "../store/context";

export default function ThemeBtn() {
    const {theme, setTheme} = UseTheme();
  const [side, setSide] = useState("right");

  useEffect(() => {
    if (typeof document !== "undefined") {
      // Temayı localStorage'dan al
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
        document.body.className = storedTheme;
      } else {
        document.body.className = theme;
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.className = theme; 
    }
  }, [theme]);

  const toggleTheme = (e) => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
  };

  return (
    <div>
      <button className="theme-btn" onClick={(e) => toggleTheme(e)}>
        {theme === "light-mode" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-color)"
            strokeWidth={"2"}
            strokeLinecap="round"
            strokeLinejoin="round"
            role="button"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="button"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
