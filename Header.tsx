import React from 'react';
import type { Theme } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  return (
    <header className="py-4 px-4 md:px-8 border-b border-gray-200 dark:border-dark-border sticky top-0 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-violet to-brand-blue">
          IA INNOVA
        </div>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};
