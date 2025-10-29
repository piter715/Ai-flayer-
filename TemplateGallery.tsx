import React from 'react';
import type { Template } from '../types';

interface TemplateGalleryProps {
  templates: Template[];
  onSelectTemplate: (template: Template) => void;
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({ templates, onSelectTemplate }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Modelos Premium</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div key={template.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-dark-card border border-dark-border/50">
            <img 
              src={template.previewImage} 
              alt={template.category} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{template.category}</h3>
                <button 
                    onClick={() => onSelectTemplate(template)}
                    className="w-full py-2 px-4 rounded-md font-semibold text-black bg-brand-gold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                    Usar este estilo
                </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
