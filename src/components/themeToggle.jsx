import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={handleThemeChange}
      className="flex items-center gap-1 px-3 py-2 rounded-md"
      style={{ background: "var(--color-primary)", color: "#fff" }}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
