'use client';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(null); // Start as null

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('Theme') || 'DarkerMode';
    setTheme(stored);
    document.body.className = stored;
  }, []);

  // Update localStorage and <body> class when theme changes
  useEffect(() => {
    if (theme) {
      localStorage.setItem('Theme', theme);
      document.body.className = theme;
    }
  }, [theme]);

  // Don't render anything until theme is loaded
  if (!theme) {
    return <div></div>;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};