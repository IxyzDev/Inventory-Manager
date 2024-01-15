"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { setCookie } from "cookies-next";

const ThemeToggleSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const darkMode = theme === "dark"; // Verifica si el tema actual es oscuro

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    const newTheme = darkMode ? "light" : "dark"; // Alternar entre claro y oscuro
    setTheme(newTheme);
    setCookie("theme", newTheme);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={darkMode} // Asegurarse de que el estado del checkbox refleje el tema actual
        onChange={handleToggle} // Manejar el cambio cuando se marca/desmarca el checkbox
      />
      <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
};

export default ThemeToggleSwitch;
