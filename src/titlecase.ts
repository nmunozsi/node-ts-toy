import { uppercase } from './uppercase.js';
import { lowercase } from './lowercase.js';

export function titlecase(s: string): string {
  if (!s) return '';

  return s
    .split(' ')
    .map(word => {
      if (!word) return word;
      return uppercase(word[0]) + lowercase(word.slice(1));
    })
    .join(' ');
}
