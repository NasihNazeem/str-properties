import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeColors {
  primary: string;
  secondary: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  updateColors: (colors: Partial<ThemeColors>) => void;
  resetToDefaults: () => void;
}

const defaultColors: ThemeColors = {
  primary: "#2c5282", // Default primary (hsl(217 50% 23%))
  secondary: "#38a169", // Default secondary (hsl(146 45% 45%))
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Helper function to convert hex to HSL
const hexToHsl = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number, s: number;
  const l: number = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(
    l * 100
  )}%`;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [colors, setColors] = useState<ThemeColors>(() => {
    const saved = localStorage.getItem("theme-colors");
    return saved ? JSON.parse(saved) : defaultColors;
  });

  const updateColors = (newColors: Partial<ThemeColors>) => {
    setColors((prev) => ({ ...prev, ...newColors }));
  };

  const resetToDefaults = () => {
    setColors(defaultColors);
  };

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("theme-colors", JSON.stringify(colors));

    // Update CSS custom properties
    const root = document.documentElement;

    // Update primary color and related variables
    const primaryHsl = hexToHsl(colors.primary);
    root.style.setProperty("--primary", primaryHsl);

    // Update secondary color and related variables
    const secondaryHsl = hexToHsl(colors.secondary);
    root.style.setProperty("--secondary", secondaryHsl);

    // Update gradients
    root.style.setProperty(
      "--hero-gradient",
      `linear-gradient(135deg, hsl(${primaryHsl}) 0%, hsl(${primaryHsl.replace(
        /(\d+)%/,
        (match, p1) => `${Math.min(100, parseInt(p1) + 10)}%`
      )}) 50%, hsl(${secondaryHsl}) 100%)`
    );
    root.style.setProperty(
      "--trust-gradient",
      `linear-gradient(90deg, hsl(${secondaryHsl}) 0%, hsl(${secondaryHsl.replace(
        /(\d+)%/,
        (match, p1) => `${Math.min(100, parseInt(p1) + 5)}%`
      )}) 100%)`
    );
    root.style.setProperty(
      "--text-gradient",
      `linear-gradient(135deg, hsl(${primaryHsl}), hsl(${secondaryHsl}))`
    );
  }, [colors]);

  return (
    <ThemeContext.Provider value={{ colors, updateColors, resetToDefaults }}>
      {children}
    </ThemeContext.Provider>
  );
};
