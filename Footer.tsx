import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 mt-12 border-t border-gray-200 dark:border-dark-border">
      <div className="container mx-auto text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Creado con IA Innova.</p>
      </div>
    </footer>
  );
};
