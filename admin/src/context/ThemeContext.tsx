"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { themes } from "../../theme/theme";

type ThemeKeys = keyof typeof themes;

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "default",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("default");

  // Carregar o tema salvo no localStorage ao iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

    // Salvar o tema no localStorage quando for alterado
    const handleThemeChange = (newTheme: string) => {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    };

  // useEffect(() => {
  //   document.documentElement.style.setProperty("--background", themes[theme as ThemeKeys].background);
  //   document.documentElement.style.setProperty("--text", themes[theme as ThemeKeys].text);
  //   document.documentElement.style.setProperty("--primary", themes[theme as ThemeKeys].primary);
  //   document.documentElement.style.setProperty("--secondary", themes[theme as ThemeKeys].secondary);
  // }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}