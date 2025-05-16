import { useContext } from "react";
import { ThemeContext, type themeTypes } from "./ThemeContext";

export const useTheme = () : themeTypes=> {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used within a ThemeProvider');
      }
    return ctx;
  };