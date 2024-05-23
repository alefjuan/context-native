import React, { createContext, useState, ReactNode, useContext } from 'react';

type Theme = 'light' | 'dark';

interface ThemePalette {
  background: string;
  color: string;
}

interface ThemeContextType {
  theme: Theme;
  palette: ThemePalette;
  toggleTheme: () => void;
}

const lightPalette: ThemePalette = {
  background: '#ffffff',
  color: '#000000'
};

const darkPalette: ThemePalette = {
  background: '#1C1C1C',
  color: '#ffffff'
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  
  const palette = theme === 'light' ? lightPalette : darkPalette;

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, palette, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
