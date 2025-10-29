import React from 'react';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ej: Flyer para tienda de ropa elegante con fondo negro y letras doradas"
        rows={3}
        className="w-full p-4 rounded-lg bg-gray-50 dark:bg-dark-card border border-gray-300 dark:border-dark-border focus:ring-2 focus:ring-brand-blue focus:outline-none transition"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !prompt}
        className="w-full flex items-center justify-center py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-blue hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generando...
          </>
        ) : (
          'Generar Flyer'
        )}
      </button>
    </form>
  );
};
