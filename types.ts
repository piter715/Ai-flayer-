export type Theme = 'light' | 'dark';

export interface Template {
  id: number;
  category: string;
  previewImage: string;
  basePrompt: string;
}
