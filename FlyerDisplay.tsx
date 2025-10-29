import React from 'react';
import { DownloadIcon } from './icons/DownloadIcon';

interface FlyerDisplayProps {
  isLoading: boolean;
  imageSrc: string | null;
  error: string | null;
}

const ShimmerEffect: React.FC = () => (
    <div className="relative aspect-[3/4] w-full max-w-lg mx-auto overflow-hidden rounded-lg bg-gray-200 dark:bg-dark-card">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent animate-shimmer"
             style={{ backgroundSize: '2000px 100%' }}>
        </div>
    </div>
);


export const FlyerDisplay: React.FC<FlyerDisplayProps> = ({ isLoading, imageSrc, error }) => {
  const handleDownload = () => {
    if (!imageSrc) return;
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'flyer-ia-innova.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return <ShimmerEffect />;
  }

  if (error) {
    return <div className="text-center p-8 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400">{error}</div>;
  }

  if (imageSrc) {
    return (
      <div className="animate-fade-in text-center flex flex-col items-center">
        <img
          src={imageSrc}
          alt="Generated Flyer"
          className="rounded-lg shadow-2xl max-w-full md:max-w-lg w-auto mx-auto border-4 border-gray-200 dark:border-dark-border"
        />
        <button
          onClick={handleDownload}
          className="mt-6 inline-flex items-center gap-2 py-2 px-6 rounded-lg font-semibold text-white bg-brand-gold hover:opacity-90 disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
        >
          <DownloadIcon />
          Descargar
        </button>
      </div>
    );
  }

  return (
    <div className="text-center p-8 rounded-lg bg-gray-100 dark:bg-dark-card border-2 border-dashed border-gray-300 dark:border-dark-border">
      <p className="text-gray-500 dark:text-gray-400">El flyer generado aparecerá aquí.</p>
    </div>
  );
};
