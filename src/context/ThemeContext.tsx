import { createContext, useContext, useState, type ReactNode } from "react";

export interface IThemeContext {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Use theme within theme provider");
  }

  return context;
};
