import { uppercase } from './uppercase.js';
import { lowercase } from './lowercase.js';

export const titlecase = (s: string): string => {
  if (s === '') return '';

  const words = s.split(' ');
  return words
    .map((word) => {
      if (word === '') return '';
      const firstChar = uppercase(word[0]!);
      const restChars = lowercase(word.slice(1));
      return firstChar + restChars;
    })
    .join(' ');
};
