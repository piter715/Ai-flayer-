import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PromptForm } from './components/PromptForm';
import { FlyerDisplay } from './components/FlyerDisplay';
import { TemplateGallery } from './components/TemplateGallery';
import { generateFlyer } from './services/geminiService';
import type { Theme, Template } from './types';
import { PREMIUM_TEMPLATES } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const handleGenerate = useCallback(async (currentPrompt: string) => {
    if (!currentPrompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateFlyer(currentPrompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError('Error al generar el flyer. Por favor, inténtalo de nuevo.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const handleTemplateSelect = (template: Template) => {
    setPrompt(template.basePrompt);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 transition-colors duration-500 font-sans">
      <Header theme={theme} setTheme={setTheme} />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-violet via-brand-blue to-brand-gold">
            IA INNOVA
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Tu creador de flyers premium con inteligencia artificial.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <PromptForm
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={() => handleGenerate(prompt)}
            isLoading={isLoading}
          />
        </div>

        <div className="mt-12">
          <FlyerDisplay
            isLoading={isLoading}
            imageSrc={generatedImage}
            error={error}
          />
        </div>
        
        <div className="mt-20">
            <TemplateGallery templates={PREMIUM_TEMPLATES} onSelectTemplate={handleTemplateSelect} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
